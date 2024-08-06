import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { InteractionsModule } from './interactions/interactions.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { CampaignCustomersModule } from './campaign-customers/campaign-customers.module';
import { configuration } from 'config';
import { AppDataSource } from 'ormconfig';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        console.log('Database Config:', {
          type: configuration.DB_TYPE,
          host: configuration.DB_HOST,
          port: configuration.DB_PORT,
          username: configuration.DB_USER,
          password: configuration.DB_PASSWORD,
          database: configuration.DB_NAME,
        });

        const config: TypeOrmModuleOptions = {
          type: configuration.DB_TYPE as 'postgres', // Explicitly cast to 'postgres'
          host: configuration.DB_HOST,
          port: configuration.DB_PORT,
          username: configuration.DB_USER,
          password: configuration.DB_PASSWORD,
          database: configuration.DB_NAME,
          entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
          synchronize: false,
        };
        return config;
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConfigModule.forRoot({
      load: [() => configuration],
      envFilePath: `config/${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    UsersModule,
    CustomersModule,
    InteractionsModule,
    CampaignsModule,
    CampaignCustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
