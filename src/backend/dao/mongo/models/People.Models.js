import mongoose from "mongoose";

const peopleSchema = new mongoose.Schema( 
    {
        firstName: { type: String, require: true },
        lastName: { type: String, require: true},
        dni: { type: Number, require },
        cuil: { tpye: Number, require },
        birthday: { type: String, require: true },
        jobTitles: { type: String },
        about: { type: String, require: true },
        city: { type: String },
        province: {  type: String },
        country: { type: String },
        thumbnails: []
    },
    { timestamps: true }
);

export const PeopleModel = mongoose.model("people", peopleSchema);