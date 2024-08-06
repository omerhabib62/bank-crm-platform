import { Module } from '@nestjs/common';
import { InteractionsService } from './interactions.service';
import { InteractionsResolver } from './interactions.resolver';

@Module({
  providers: [InteractionsResolver, InteractionsService],
})
export class InteractionsModule {}
