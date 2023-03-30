import { model, Schema, Document } from 'mongoose';
import { Order } from '@interfaces/orders.interface';

const OrderSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    postal: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    items: {
      type: [{}],
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
    timestamps: true,
  },
);

export const OrderModel = model<Order & Document>('Order', OrderSchema);
