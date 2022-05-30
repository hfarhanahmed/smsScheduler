import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { ENTITY_NAMES } from '../constants';

@Entity(ENTITY_NAMES.RECIPIENTS)
export class Recipient {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column('text')
	public number: string;
}