import { CreateCampaignCustomerInput } from './create-campaign-customer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampaignCustomerInput extends PartialType(CreateCampaignCustomerInput) {
  @Field(() => Int)
  id: number;
}
