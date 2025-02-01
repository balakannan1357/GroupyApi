import { IMessage } from "@/interfaces/message.interface";
import { BaseController } from "./base.controller";
import { MessageService } from "@/services/message.service";
import Container from "typedi";

export class MessageController extends BaseController<IMessage>{
  private readonly _service = Container.get(MessageService);
  constructor() {
    super();
    this.setService(this._service);
  }
}