import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Interaction } from '../../interactions/entities/interaction.entity';
import { CampaignCustomer } from '../../campaign-customers/entities/campaign-customer.entity';

@ObjectType()
@Entity('customers')
export class Customer {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  first_name: string;

  @Field()
  @Column()
  last_name: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column()
  phone: string;

  @Field(() => String)
  @Column('jsonb')
  address: object;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  @Field(() => [Interaction])
  @OneToMany(() => Interaction, (interaction) => interaction.customer)
  interactions: Interaction[];

  @Field(() => [CampaignCustomer])
  @OneToMany(
    () => CampaignCustomer,
    (campaignCustomer) => campaignCustomer.customer,
  )
  campaignCustomers: CampaignCustomer[];
}
