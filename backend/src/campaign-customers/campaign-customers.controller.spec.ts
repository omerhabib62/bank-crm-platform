import { Test, TestingModule } from '@nestjs/testing';
import { CampaignCustomersController } from './campaign-customers.controller';
import { CampaignCustomersService } from './campaign-customers.service';

describe('CampaignCustomersController', () => {
  let controller: CampaignCustomersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampaignCustomersController],
      providers: [CampaignCustomersService],
    }).compile();

    controller = module.get<CampaignCustomersController>(CampaignCustomersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
