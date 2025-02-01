import { ICreatorBase } from "./creatorBase.interface";

export interface IMessage extends ICreatorBase {
  _id: string;
  riderGroupId: string;
  senderId: string;
  message: string;
  status: number;
}