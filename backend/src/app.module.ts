import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './../config';
import { AppDataSource } from './../ormconfig';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { InteractionsModule } from './interactions/interactions.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { CampaignCustomersModule } from './campaign-customers/campaign-customers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [() => configuration],
      envFilePath: `config/${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(AppDataSource.options),
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