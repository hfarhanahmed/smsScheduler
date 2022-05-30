import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SentSms } from './sent-sms.entity';
import { SentSmsService } from './sent-sms.service';

@Module({
    imports: [TypeOrmModule.forFeature([SentSms]), SentSmsModule],
    providers: [SentSmsService],
})
export class SentSmsModule { }
