import { Test, TestingModule } from '@nestjs/testing';
import { MailchipService } from './mailchip.service';

describe('MailchipService', () => {
  let service: MailchipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailchipService],
    }).compile();

    service = module.get<MailchipService>(MailchipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
