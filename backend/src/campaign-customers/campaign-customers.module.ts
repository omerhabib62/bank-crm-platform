import { Module } from '@nestjs/common';
import { CampaignCustomersService } from './campaign-customers.service';
import { CampaignCustomersController } from './campaign-customers.controller';

@Module({
  controllers: [CampaignCustomersController],
  providers: [CampaignCustomersService],
})
export class CampaignCustomersModule {}
