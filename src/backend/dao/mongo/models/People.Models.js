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
        thumbnails: [],
        user: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "users",
        }
    },
    { timestamps: true }
);

export const PeopleModel = mongoose.model("people", peopleSchema);