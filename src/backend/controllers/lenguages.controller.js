import { isValidObjectId } from "mongoose";
import lenguagesService from "../services/lenguages.service.js";

class LenguagesController {
    constructor() {
        this.lService = lenguagesService;
    };

    createLenguage = async (req, res) => {
        const data = reqq.body;
        if (!data || !data.title || !data.percent) { return res.json400("Missing Information!(C)"); };
        const lenguage = await this.lService.createOne(data);
        res.json201(lenguage);
    };

    getLenguageById = async (req, res) => {
        const { lid } = req.params;
        const lenguage = this.verifyLenguageFun(lid);
        if (lenguage === null) { return res.json404("Lenguage Not Found!(C)"); };
        return res.json200(lenguage);
    };

    getLenguageByFilter = async (req, res) => {
        //FALTA BUSCAR POR FILTRO!
    };

    getAllLenguages = async (req, res) => {
        const lenguages = await this.lService.getAllLenguages();
        if (lenguages.length === 0) { return res.json404("Not Lenguages Found!(C)"); };
        return res.json200(lenguages);
    };

    updateLenguageById = async (req, res) => {
        const { lid } = req.params;
        const data = req.body;
        if (!data) { return res.json400("Not information to Udpate!(C)"); };
        const lenguage = await this.verifyLenguageFun(lid);
        if (lenguage === null) { return res.json404("Lenguage Not Found!(C)"); };
        const lenguageUpdated = await this.lService.updateById(lid, data);
        return res.json200(lenguageUpdated);
    };

    deleteLenguageById = async (req, res) => {
        const { lid } = req.params;
        const lenguage = await this.verifyLenguageFun(lid);
        if (lenguage === null) { return res.json404("Lenguage Not Found!(C)"); };
        const lenguageDeleted = await this.lService.destroyById(lid);
        return res.json200(lenguageDeleted);
    };

    verifyLenguageFun = async (lid) => {
        if(!isValidObjectId(lid)) { return res.json400("Invalid Lenguage ID!(C)"); };
        const verify = await this.lService.getLenguageById(lid);
        if(!verify) { return null; }
        else { return verify; };
    };
};

const lenguagesController = new LenguagesController();

export default lenguagesController;