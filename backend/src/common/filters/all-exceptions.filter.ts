import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    Logger,
    BadRequestException,
  } from '@nestjs/common';
  import { Response } from 'express';
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    private readonly logger = new Logger(AllExceptionsFilter.name);
  
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      const status = exception.getStatus ? exception.getStatus() : 500;
      const message = exception.message || 'Internal server error';
  
      // Check if it's a BadRequestException and handle validation errors
      if (exception instanceof BadRequestException) {
        const responseBody = exception.getResponse();
        let validationErrors = '';
  
        // Extract detailed validation errors from the response
        if (typeof responseBody === 'object' && responseBody['message']) {
          const messages = responseBody['message'];
          if (Array.isArray(messages)) {
            validationErrors = messages.join(', ');
          } else {
            validationErrors = messages;
          }
        }
  
        this.logger.error(
          `HTTP Status: ${status} Error Message: ${validationErrors}`,
          exception.stack,
        );
  
        response.status(status).json({
          message: validationErrors,
          statusCode: status,
          timestamp: new Date().toISOString(),
          path: request.url,
        });
      } else {
        this.logger.error(
          `HTTP Status: ${status} Error Message: ${message}`,
          exception.stack,
        );
  
        response.status(status).json({
          message,
          statusCode: status,
          timestamp: new Date().toISOString(),
          path: request.url,
        });
      }
    }
  }