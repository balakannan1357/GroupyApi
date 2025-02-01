import { IMessage } from "@/interfaces/message.interface";
import { BaseService } from "./base.service";
import { MessageModel } from "@/models/messages.model";
import { Service } from "typedi";

@Service()
export class MessageService extends BaseService<IMessage>{
  constructor() {
    super(MessageModel);
  }

}