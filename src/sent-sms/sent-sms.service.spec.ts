import { Test, TestingModule } from '@nestjs/testing';
import { SentSmsService } from './sent-sms.service';

describe('SentSmsService', () => {
  let service: SentSmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SentSmsService],
    }).compile();

    service = module.get<SentSmsService>(SentSmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
