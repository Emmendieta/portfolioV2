import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";

const educationSchema = new mongoose.Schema(
    {
        institutionName: { type: String, require: true },
        title: { type: String, require: true },
        dateStart: { type: Date, require: true },
        dateEnd: { type: Date },
        linkInstitution: { type: String },
        iconInstitution: {type: String },
        certificate: { type: String},
        linkCertificate: { type: String },
        finished: { type: Boolean },
        typeEducation: {
            type: String,
            enum: ["Primary School", "High School", "University", "Curse", "Congress"],
            require: true
        },
        description: { type: String, require: true }
    },
    { timestamps: true }
);

educationSchema.plugin(paginate);

export const EducationModel = mongoose.model(
    "educations",
    educationSchema
);