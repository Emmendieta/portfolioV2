import mongoose from "mongoose";

const socialMediasSChema = new mongoose.Schema(
    {
        title: { type: String, require: true },
        linkSocial: { type: String, require: true },
        thumbnails: []
    },
    { timestamps: true }
);

export const SocialMediaModel = mongoose.model("socialMedias", socialMediasSChema);