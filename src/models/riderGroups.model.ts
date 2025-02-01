import { IMessage } from '@/interfaces/message.interface';
import { Document, model, Schema } from 'mongoose';
import { creatorBaseSchema } from './creatorBase.model';
import { bool } from 'envalid';

const riderGroupsSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    payGroup: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    start:{
        type:String,
        required:true,
    },
    destination:{
        type:String,
        required:true,
    },
    route:{
        type:String,
        required:true,
    },
    members: {
        type: Array,
        required: true,
    },
    vechile: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    avgStartTime: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    ...creatorBaseSchema,
  },
  { timestamps: true, collection: 'riderGroups' },
);

export const riderGroupsModel = model<IMessage & Document>('Message', riderGroupsSchema);
