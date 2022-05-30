import { Module } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { SchedulerController } from './scheduler.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scheduler } from './scheduler.entity';
import { SentSms } from './sent-sms.entity';
import { Recipient } from './recipient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Scheduler, SentSms, Recipient])],
  providers: [SchedulerService],
  controllers: [SchedulerController],
})
export class SchedulerModule { }
