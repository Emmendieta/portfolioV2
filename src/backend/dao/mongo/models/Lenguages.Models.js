import mongoose from "mongoose";

const lenguageSchema = new mongoose.Schema(
    {
        title: { type: String, require: true },
        percent: { type: Number, require: true },
        thumbnails: []
    },
    { timestamps: true }
);

export const LenguagesModel = mongoose.model("lenguages", lenguageSchema);