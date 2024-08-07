import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Campaign } from './../../campaigns/entities/campaign.entity';
import { Customer } from './../../customers/entities/customer.entity';

@Entity('campaign_customers')
export class CampaignCustomer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  campaign_id: string;

  @ManyToOne(() => Campaign, campaign => campaign.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'campaign_id' })
  campaign: Campaign;

  @Column()
  customer_id: string;

  @ManyToOne(() => Customer, customer => customer.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @Column()
  status: string; // possible statuses: 'targeted', 'contacted', 'converted'

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
