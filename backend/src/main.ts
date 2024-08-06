import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { configuration } from 'config';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppDataSource } from 'ormconfig';

async function bootstrap() {
  await AppDataSource.initialize();

  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  const whiteList = ['*'];
  app.enableCors({
    origin: function (origin, callback) {
      if (whiteList.indexOf('*') >= 0 || whiteList.indexOf(origin) >= 0 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  app.setGlobalPrefix(`${configuration.API_VERSION_ROUTE}/api`);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new AllExceptionsFilter());

  const config = new DocumentBuilder()
    .setTitle(configuration.API_NAME)
    .setDescription(configuration.API_DESCRIPTION)
    .setVersion(configuration.API_VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(
    `${configuration.API_VERSION_ROUTE}/api/docs`,
    app,
    document,
  );

  await app.listen(configuration.PORT);

  console.log(
    `Server running at ${configuration.BASE_URL}:${configuration.PORT}`,
  );
}
bootstrap();
