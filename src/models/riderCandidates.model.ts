import { IMessage } from '@/interfaces/message.interface';
import { Document, model, Schema } from 'mongoose';
import { creatorBaseSchema } from './creatorBase.model';
import { bool } from 'envalid';

const riderCandidatesSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    startTime0: {
        type: Date,
        required: true,
    },
    startTime1: {
        type: Date,
        required: true,
    },
    pickupLocation: {
        type: String,
        required: true,
    },
    dropLocation: {
        type: String,
        required: true,
    },
    vechile: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    preferences: {
        type: Array,
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
  { timestamps: true, collection: 'riderCandidates' },
);

export const riderCandidatesModel = model<IMessage & Document>('Message', riderCandidatesSchema);
