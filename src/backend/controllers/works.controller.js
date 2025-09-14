import { isValidObjectId } from "mongoose";
import worksServices from "../services/works.service.js";

class WorksController {
    constructor() {
        this.wService = worksServices;
    };

    createWork = async (req, res) => {
        const data = req.body;
        if (!data || !data.jobTitle || !data.dateStart || !data.company || !data.description) { return res.json400("Missing information!(C)"); };
        const work = await this.wService.createOne(data);
        return res.json201(work);
    };

    getWorkById = async (req, res) => {
        const { wid } = req.params;
        const work = await this.verifyWorkFun(wid);
        if ( work === null) { return res.json404("Not Work Found!(C)"); };
        return res.json200(work);
    };

    getWorkByFilter = async (req, res) => {
        //Falta Buscar por filtro!
    };

    getAllWorks = async (req, res) => {
        const works = await this.wService.getAllWorks();
        if (works.length === 0) { return res.json404("Not Works Found!(C)"); };
        return res.json200(works);
    };

    updateWorkById = async (req, res) => {
        const { wid } = req.params;
        const data = req.body;
        if (!data) { return res.json400("No Data to update!(C)"); };
        const work = await this.verifyWorkFun(wid);
        if (work === null) { return res.json404("Not Work Found!(C)"); };
        const workUpdated = await this.wService.updateById(wid, data);
        return res.json200(workUpdated);
    };

    deleteWorkById = async (req, res) => {
        const { wid } = req.params;
        const work = await this.verifyWorkFun(wid);
        if (work === null) { return res.json404("Not Work Found!(C)"); };
        const workDeleted = await this.wService.destroyById(wid);
        return res.json200(workDeleted);
    };

    verifyWorkFun = async (wid) => {
        if(!isValidObjectId(wid)) { return res.json400("Invalid Word ID!(C)"); };
        const verify = await this.wService.readById(wid);
        if (!verify) { return null; }
        else return verify;
    };
};

const worksController = new WorksController();

export default worksController;