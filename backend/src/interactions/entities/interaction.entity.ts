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

@ObjectType()
@Entity('interactions')
export class Interaction {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  customer_id: string;

  @Field()
  @Column()
  interaction_type: string;

  @Field()
  @Column()
  interaction_date: Date;

  @Field()
  @Column('text')
  notes: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Customer, (customer) => customer.interactions, {
    onDelete: 'CASCADE',
  })
  customer: Customer;
}
