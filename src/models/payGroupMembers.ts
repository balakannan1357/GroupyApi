import { IMessage } from '@/interfaces/message.interface';
import { Document, model, Schema } from 'mongoose';
import { creatorBaseSchema } from './creatorBase.model';
import { bool } from 'envalid';

const payGroupMembersSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    payGroup: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    amount: {
      type: Float32Array,
      required: true,
    },
    paid: {
      type: Boolean,
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
  { timestamps: true, collection: 'payGroupMembers' },
);

export const payGroupMembersModel = model<IMessage & Document>('Message', payGroupMembersSchema);
