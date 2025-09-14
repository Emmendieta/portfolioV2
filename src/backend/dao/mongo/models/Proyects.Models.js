import mongoose from "mongoose";

const proyectSchema = new mongoose.Schema(
    {
        title: {type: String, require: true },
        dateStart: {type: Date},
        dateEnd: { type: Date},
        linkProyect: { type: String },
        linkCompany: { type: String },
        description: { type: String, require: true },
        lenguages: {
            type: [
                {
                    lenguage: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "lenguages",
                        require: true
                    }
                }
            ],
            default: [""]
        }
    },
    { timestamps: true }
);

export const ProyectsModel = mongoose.model("proyects", proyectSchema);