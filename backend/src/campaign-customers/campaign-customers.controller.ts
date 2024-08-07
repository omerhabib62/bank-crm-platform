import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampaignCustomersService } from './campaign-customers.service';
import { CreateCampaignCustomerDto } from './dto/create-campaign-customer.dto';
import { UpdateCampaignCustomerDto } from './dto/update-campaign-customer.dto';

@Controller('campaign-customers')
export class CampaignCustomersController {
  constructor(private readonly campaignCustomersService: CampaignCustomersService) {}

  @Post()
  create(@Body() createCampaignCustomerDto: CreateCampaignCustomerDto) {
    return this.campaignCustomersService.create(createCampaignCustomerDto);
  }

  @Get()
  findAll() {
    return this.campaignCustomersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campaignCustomersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCampaignCustomerDto: UpdateCampaignCustomerDto) {
    return this.campaignCustomersService.update(+id, updateCampaignCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campaignCustomersService.remove(+id);
  }
}
