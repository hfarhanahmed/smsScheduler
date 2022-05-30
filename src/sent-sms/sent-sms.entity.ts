import { SmsStatus } from 'src/constants/sms-status.enum';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

import { ENTITY_NAMES } from '../constants';
import { Scheduler } from '../scheduler/scheduler.entity';

@Entity(ENTITY_NAMES.SENT_SMS)
export class SentSms {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@OneToOne(() => Scheduler)
	@JoinColumn()
	public scheduler: Scheduler;

	@Column('varchar', { length: 255, nullable: true, default: SmsStatus.Unknown })
	public status: string = SmsStatus.Unknown;

	@Column('varchar', { length: 255 })
	public messageId: string;
}
