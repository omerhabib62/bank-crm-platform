import { Test, TestingModule } from '@nestjs/testing';
import { InteractionsResolver } from './interactions.resolver';
import { InteractionsService } from './interactions.service';

describe('InteractionsResolver', () => {
  let resolver: InteractionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InteractionsResolver, InteractionsService],
    }).compile();

    resolver = module.get<InteractionsResolver>(InteractionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
