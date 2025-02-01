import { IMessage } from '@/interfaces/message.interface';
import { Document, model, Schema } from 'mongoose';
import { creatorBaseSchema } from './creatorBase.model';
import { bool } from 'envalid';
import { timeStamp } from 'console';

const paymentsSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    payGroup: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    transactionId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    createdOn: {
        type: Date,
        required: true,
    },
    status: {
      type: String,
      required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        },
    ...creatorBaseSchema,
  },
  { timestamps: true, collection: 'payments' },
);

export const paymentsModel = model<IMessage & Document>('Message', paymentsSchema);
