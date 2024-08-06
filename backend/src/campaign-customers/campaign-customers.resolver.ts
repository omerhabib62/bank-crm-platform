import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CampaignCustomersService } from './campaign-customers.service';
import { CampaignCustomer } from './entities/campaign-customer.entity';
import { CreateCampaignCustomerInput } from './dto/create-campaign-customer.input';
import { UpdateCampaignCustomerInput } from './dto/update-campaign-customer.input';

@Resolver(() => CampaignCustomer)
export class CampaignCustomersResolver {
  constructor(private readonly campaignCustomersService: CampaignCustomersService) {}

  @Mutation(() => CampaignCustomer)
  createCampaignCustomer(@Args('createCampaignCustomerInput') createCampaignCustomerInput: CreateCampaignCustomerInput) {
    return this.campaignCustomersService.create(createCampaignCustomerInput);
  }

  @Query(() => [CampaignCustomer], { name: 'campaignCustomers' })
  findAll() {
    return this.campaignCustomersService.findAll();
  }

  @Query(() => CampaignCustomer, { name: 'campaignCustomer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.campaignCustomersService.findOne(id);
  }

  @Mutation(() => CampaignCustomer)
  updateCampaignCustomer(@Args('updateCampaignCustomerInput') updateCampaignCustomerInput: UpdateCampaignCustomerInput) {
    return this.campaignCustomersService.update(updateCampaignCustomerInput.id, updateCampaignCustomerInput);
  }

  @Mutation(() => CampaignCustomer)
  removeCampaignCustomer(@Args('id', { type: () => Int }) id: number) {
    return this.campaignCustomersService.remove(id);
  }
}
