import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchedulerModule } from './scheduler/scheduler.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TableMetadataArgs } from 'typeorm/metadata-args/TableMetadataArgs';
import { typeormConfiguration } from './environments/environment';
import { getMetadataArgsStorage } from 'typeorm';
import { SchedulerController } from './scheduler/scheduler.controller';
import { SchedulerService } from './scheduler/scheduler.service';
import { Scheduler } from './scheduler/scheduler.entity';
import { SentSms } from './scheduler/sent-sms.entity';
import { Recipient } from './scheduler/recipient.entity';

const ENTITIES = [Scheduler, SentSms, Recipient];

const MODULES = [
  TypeOrmModule.forRoot({
    ...(typeormConfiguration as TypeOrmModuleOptions),
    entities: getMetadataArgsStorage().tables.map(
      ({ target }: TableMetadataArgs) => target,
    ),
  }),
  SchedulerModule,
  TypeOrmModule.forFeature(ENTITIES),
];

@Module({
  imports: MODULES,
  controllers: [AppController, SchedulerController],
  providers: [AppService, SchedulerService],
})
export class AppModule { }