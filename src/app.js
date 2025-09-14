import express from "express";
import path from 'path';
import __dirname from "./backend/utils/utils.js";
import "dotenv/config.js";
import dbConnect from "./backend/helpers/dbConnect.helper.js";
import argvsHelper from "./backend/helpers/argvs.helper.js";
import { engine } from "express-handlebars";
import moment from "moment";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import pathHandler from "./backend/middlewares/pathHandler.mid.js";
import errorHandler from "./backend/middlewares/errorHandler.mid.js";

const app = express();
const PORT = process.env.PORT || 8000;

const ready = async () => {
    console.log(process.env.PERSISTENCE);
    if (process.env.PERSISTENCE === "mongo") {
        await dbConnect(process.env.LINK_MONGODB);
        //FALTA LOGGER
        console.log(`Server ready on port ${PORT} in mode: ${argvsHelper.mode}`);
    } else if (process.env.PERSISTENCE === "fs") {
        //FALTA LOOGGER
        console.log(`Fs not ready!`);
    } else {
        //falta logger
        console.log("Memory pennding!");
    }
};

/* Engine Setting */
app.engine("handlebars", engine({
    helpers: {
        formatDate: (date) => moment(date).format("YYYY-MM-DD")
    },
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "../views"));

/* Middlewares Settings */

app.use(compression());
app.use(cookieParser(process.env.SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("dev"));

app.listen(PORT, ready);

/* Router Setting */

//app.use("/", indexRouter);
app.use(pathHandler);
app.use(errorHandler);

export default app;