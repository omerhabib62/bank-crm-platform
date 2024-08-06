import { Injectable } from '@nestjs/common';
import { CreateCampaignCustomerInput } from './dto/create-campaign-customer.input';
import { UpdateCampaignCustomerInput } from './dto/update-campaign-customer.input';

@Injectable()
export class CampaignCustomersService {
  create(createCampaignCustomerInput: CreateCampaignCustomerInput) {
    return 'This action adds a new campaignCustomer';
  }

  findAll() {
    return `This action returns all campaignCustomers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignCustomer`;
  }

  update(id: number, updateCampaignCustomerInput: UpdateCampaignCustomerInput) {
    return `This action updates a #${id} campaignCustomer`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignCustomer`;
  }
}
