import mongoose from "mongoose";

const userSchema = new mongoose.Schema( 
    {
        user: { type: String, require: true },
        email: { type: String, require: true },
        password: { type: String, require: true },
        role: { type: String, default: 'user' },
        person: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "people",
        }
        //FALTA ASOCIAR: EDUCATIONS, LENGUAGES, PROYECTS, SOCIALMEDIAS, WORKS
    },
    { timestamps: true}
);

export const  UsersModel = mongoose.model("users", userSchema);