import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

import { ENTITY_NAMES } from '../constants';
import { Scheduler } from './scheduler.entity';

@Entity(ENTITY_NAMES.SENT_SMS)
export class SentSms {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@OneToOne(() => Scheduler)
	public scheduler: Scheduler;

	@Column('varchar', { length: 255 })
	public status: string;
}
