import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        title: { tpye: String, require: true},
        thumbnails: []
    },
    { timestamps: true }
);

export const CategoryModel = mongoose.model(
    "categories",
    categorySchema
);
