import { Injectable } from '@nestjs/common';
import { CreateCampaignCustomerDto } from './dto/create-campaign-customer.dto';
import { UpdateCampaignCustomerDto } from './dto/update-campaign-customer.dto';

@Injectable()
export class CampaignCustomersService {
  create(createCampaignCustomerDto: CreateCampaignCustomerDto) {
    return 'This action adds a new campaignCustomer';
  }

  findAll() {
    return `This action returns all campaignCustomers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignCustomer`;
  }

  update(id: number, updateCampaignCustomerDto: UpdateCampaignCustomerDto) {
    return `This action updates a #${id} campaignCustomer`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignCustomer`;
  }
}
