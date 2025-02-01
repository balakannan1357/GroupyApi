import { IMessage } from '@/interfaces/message.interface';
import { Document, model, Schema } from 'mongoose';
import { creatorBaseSchema } from './creatorBase.model';

const messageSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    riderGroupId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    senderId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
    ...creatorBaseSchema,
  },
  { timestamps: true, collection: 'Messages' },
);

export const MessageModel = model<IMessage & Document>('Message', messageSchema);
