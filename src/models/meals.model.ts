import { model, Schema, Document } from 'mongoose';
import { Meal } from '@interfaces/meals.interface';

const MealSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
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

export const MealModel = model<Meal & Document>('Meal', MealSchema);
