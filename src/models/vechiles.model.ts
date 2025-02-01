import { IMessage } from '@/interfaces/message.interface';
import { Document, model, Schema } from 'mongoose';
import { creatorBaseSchema } from './creatorBase.model';


const vechilesSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    type: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    seats: {
        type: Number,
        required: true,
    },
    numberPlate: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    ...creatorBaseSchema,
  },
  { timestamps: true, collection: 'vechiles' },
);

export const vechilesModel = model<IMessage & Document>('Message', vechilesSchema);
