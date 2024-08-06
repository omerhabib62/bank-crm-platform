import { Test, TestingModule } from '@nestjs/testing';
import { CampaignCustomersResolver } from './campaign-customers.resolver';
import { CampaignCustomersService } from './campaign-customers.service';

describe('CampaignCustomersResolver', () => {
  let resolver: CampaignCustomersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignCustomersResolver, CampaignCustomersService],
    }).compile();

    resolver = module.get<CampaignCustomersResolver>(CampaignCustomersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
