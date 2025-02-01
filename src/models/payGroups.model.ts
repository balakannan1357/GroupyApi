import { IMessage } from '@/interfaces/message.interface';
import { Document, model, Schema } from 'mongoose';
import { creatorBaseSchema } from './creatorBase.model';
import { bool } from 'envalid';

const payGroupsSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    alias: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    splitMocc: {
        type: String,
        required: true,
    },
    totalAmount: {
        type: Float32Array,
        required: true,
    },
    members: {
        type: Array,
        required: true,
    },
    riderGroup: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    expiresOn: {
        type: Date,
        required: true,
    },
    createdOn: {
        type: Date,
        required: true,
    },
    completed:{
        type: Boolean,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    ...creatorBaseSchema,
  },
  { timestamps: true, collection: 'payGroups' },
);

export const payGroupsModel = model<IMessage & Document>('Message', payGroupsSchema);
