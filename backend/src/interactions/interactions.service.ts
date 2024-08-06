import { Injectable } from '@nestjs/common';
import { CreateInteractionInput } from './dto/create-interaction.input';
import { UpdateInteractionInput } from './dto/update-interaction.input';

@Injectable()
export class InteractionsService {
  create(createInteractionInput: CreateInteractionInput) {
    return 'This action adds a new interaction';
  }

  findAll() {
    return `This action returns all interactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interaction`;
  }

  update(id: number, updateInteractionInput: UpdateInteractionInput) {
    return `This action updates a #${id} interaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} interaction`;
  }
}
