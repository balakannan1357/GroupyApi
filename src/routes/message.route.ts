import { MessageController } from '@/controllers/message.controller';
import { CreateMessageDto } from '@/dtos/message.dto';
import { IMessage } from '@/interfaces/message.interface';
import { Router } from 'express';
import { BaseRoute } from './base.route';

export class MessageRoute extends BaseRoute<IMessage> {
  public path = '/message';
  public router = Router();
  public controller = new MessageController();

  constructor() {
    super();
    this.initializeBaseRoutes(this.router, this.path, this.controller, CreateMessageDto);
  }
}
