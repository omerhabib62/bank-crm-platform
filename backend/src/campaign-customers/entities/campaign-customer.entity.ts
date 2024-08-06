import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Customer } from 'src/customers/entities/customer.entity';
import { Campaign } from 'src/campaigns/entities/campaign.entity';

@ObjectType()
@Entity('campaign_customers')
export class CampaignCustomer {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  campaign_id: string;

  @Field()
  @Column()
  customer_id: string;

  @Field()
  @Column()
  status: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Campaign, (campaign) => campaign.campaignCustomers, {
    onDelete: 'CASCADE',
  })
  campaign: Campaign;

  @ManyToOne(() => Customer, (customer) => customer.campaignCustomers, {
    onDelete: 'CASCADE',
  })
  customer: Customer;
}
