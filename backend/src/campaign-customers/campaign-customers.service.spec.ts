import { Test, TestingModule } from '@nestjs/testing';
import { CampaignCustomersService } from './campaign-customers.service';

describe('CampaignCustomersService', () => {
  let service: CampaignCustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignCustomersService],
    }).compile();

    service = module.get<CampaignCustomersService>(CampaignCustomersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
