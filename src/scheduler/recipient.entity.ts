import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';

import { ENTITY_NAMES } from '../constants';
import { Scheduler } from './scheduler.entity';

@Entity(ENTITY_NAMES.RECIPIENTS)
export class Recipient {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column('text')
	public number: string;

	@ManyToMany((type) => Scheduler, (scheduler) => scheduler.recipients)
	schedulers: Scheduler[]
}