import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInteractionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
