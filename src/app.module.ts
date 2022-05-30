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
import { SentSms } from './sent-sms/sent-sms.entity';
import { Recipient } from './scheduler/recipient.entity';
import { HttpModule } from '@nestjs/axios';
import { SentSmsModule } from './sent-sms/sent-sms.module';
import { SentSmsService } from './sent-sms/sent-sms.service';

const ENTITIES = [Scheduler, SentSms, Recipient];

const MODULES = [
  TypeOrmModule.forRoot({
    ...(typeormConfiguration as TypeOrmModuleOptions),
    entities: getMetadataArgsStorage().tables.map(
      ({ target }: TableMetadataArgs) => target,
    ),
  }),
  SentSmsModule,
  SchedulerModule,
  TypeOrmModule.forFeature(ENTITIES),
  HttpModule
];

@Module({
  imports: MODULES,
  controllers: [AppController, SchedulerController],
  providers: [AppService, SchedulerService, SentSmsService],
})
export class AppModule { }