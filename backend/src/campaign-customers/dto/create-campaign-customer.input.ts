import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCampaignCustomerInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
