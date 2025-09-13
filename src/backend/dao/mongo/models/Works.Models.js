import mongoose from "mongoose";

const worksSchema = new mongoose.Schema(
    {
        jobTitle: { type: String, require: true },
        dateStart: { type: Date, require: true },
        dateEnd: { type: Date },
        company: { type: String, require: true },
        linkCompany: { type: String },
        description: { type: String, require: true },
        thumbnails: []
    },
    { timestamps: true }    
);

export const WorksModel = mongoose.model("works", worksSchema);