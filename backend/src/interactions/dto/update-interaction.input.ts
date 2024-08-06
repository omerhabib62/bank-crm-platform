import { CreateInteractionInput } from './create-interaction.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInteractionInput extends PartialType(CreateInteractionInput) {
  @Field(() => Int)
  id: number;
}
