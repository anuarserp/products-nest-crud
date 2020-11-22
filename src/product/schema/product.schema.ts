import { Schema } from 'mongoose'

export const ProductSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
         trim: true,
      },
      description: {
         type: String,
         required: true,
         trim: true,
      },
      price: {
         type: Number,
         required: true,
      },
      imageURL: {
         type: String,
         required: true,
         trim: true,
      }
   },
   {
      versionKey: false,
      timestamps: true,
   }
);



