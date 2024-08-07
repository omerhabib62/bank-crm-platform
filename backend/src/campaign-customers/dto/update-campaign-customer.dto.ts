import { PartialType } from '@nestjs/swagger';
import { CreateCampaignCustomerDto } from './create-campaign-customer.dto';

export class UpdateCampaignCustomerDto extends PartialType(CreateCampaignCustomerDto) {}
