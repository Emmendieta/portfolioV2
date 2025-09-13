import mongoose from "mongoose";

const userSchema = new mongoose.Schema( 
    {
        user: { type: String, require: true },
        email: { type: String, require: true },
        password: { type: String, require: true },
        role: { type: String, default: 'user' }
    },
    { timestamps: true}
);

export const  UsersModel = mongoose.model("users", userSchema);