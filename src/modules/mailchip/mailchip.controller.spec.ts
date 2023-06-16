import { Test, TestingModule } from '@nestjs/testing';
import {MailchipController} from "../admin/admin-mailchip.controller";
import { MailchipService } from './mailchip.service';

describe('MailchipController', () => {
  let controller: MailchipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailchipController],
      providers: [MailchipService],
    }).compile();

    controller = module.get<MailchipController>(MailchipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
