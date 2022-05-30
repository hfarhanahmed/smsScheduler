import { Module, HttpModule as HttpCommonModule } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { SchedulerController } from './scheduler.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scheduler } from './scheduler.entity';
import { SentSms } from '../sent-sms/sent-sms.entity';
import { Recipient } from './recipient.entity';
import { HttpModule } from '@nestjs/axios';
import { SentSmsModule } from '../sent-sms/sent-sms.module';
import { SentSmsService } from '../sent-sms/sent-sms.service';

@Module({
  imports: [SentSmsModule, HttpModule, TypeOrmModule.forFeature([Scheduler, SentSms, Recipient])],
  providers: [SchedulerService, SentSmsService],
  controllers: [SchedulerController],
})
export class SchedulerModule { }
