import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CampaignCustomer } from 'src/campaign-customers/entities/campaign-customer.entity';

@ObjectType()
@Entity('campaigns')
export class Campaign {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @Column()
  start_date: Date;

  @Field()
  @Column()
  end_date: Date;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  @Field(() => [CampaignCustomer])
  @OneToMany(
    () => CampaignCustomer,
    (campaignCustomer) => campaignCustomer.campaign,
  )
  campaignCustomers: CampaignCustomer[];
}
