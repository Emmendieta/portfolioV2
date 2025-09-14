import mongoose from "mongoose";

const socialMediasSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        linkSocial: { type: String, required: true },
        thumbnails: [{ type: String }]
    },
    { timestamps: true }
);

export const SocialMediaModel = mongoose.model("socialMedias", socialMediasSchema);