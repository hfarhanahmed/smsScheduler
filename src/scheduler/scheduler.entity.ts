import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany,
	JoinTable,
} from 'typeorm';

import { ENTITY_NAMES } from '../constants';
import { Recipient } from './recipient.entity';

@Entity(ENTITY_NAMES.SCHEDULER)
export class Scheduler {

	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column('text')
	public message: string;

	@Column('datetime')
	public executionTime: Date;

	@ManyToMany(() => Recipient)
	@JoinTable()
	public recipients: Recipient[];
}
