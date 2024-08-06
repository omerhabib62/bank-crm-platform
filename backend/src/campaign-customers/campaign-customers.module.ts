import { Module } from '@nestjs/common';
import { CampaignCustomersService } from './campaign-customers.service';
import { CampaignCustomersResolver } from './campaign-customers.resolver';

@Module({
  providers: [CampaignCustomersResolver, CampaignCustomersService],
})
export class CampaignCustomersModule {}
