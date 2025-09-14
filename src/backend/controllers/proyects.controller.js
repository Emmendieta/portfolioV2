import { isValidObjectId } from "mongoose";
import proyectsService from "../services/proyects.service.js";

class ProyectsController {
    constructor() {
        this.pService = proyectsService;
    };

    createProyect = async (req, res) => {
        const data = req.body;
        if (!data || !data.title || !data.description || !data.lenguages) { return res.json400("Missing Information!(C)"); };
        const proyect = await this.pService.createOne(data);
        return res.json201(proyect);
    };

    getProyectById = async (req, res) => {
        const { pyid } = req.params;
        const proyect = await this.verifyProyectFun(pyid);
        if (proyect === null) { return res.json404("Proyect Not Found!(C)"); };
        return res.json200(proyect);
    };

    getProyectByFilter = async (req, res) => {
        //Falta Buscar por Filtro!
    };

    getAllProyects = async (req, res) => {
        const proyects = await this.pService.getAllProyects();
        if (proyects.length === 0) { return res.json404("No Proyects Found!(C)"); };
        return res.json200(proyects);
    };

    updateProyectById = async (req, res) => {
        const { pyid } = req.params;
        const data = req.body;
        if (!data) { return res.json400("No Information to Udpate!(C)"); };
        const proyect = await this.verifyProyectFun(pyid);
        if (proyect === null) { return res.json404("Proyect Not Found!(C)"); };
        const proyectUpdated = await this.pService.updateByid(pyid, data);
        return res.json200(proyectUpdated);
    };

    deleteProyectByid = async (req, res) => {
        const { pyid } = req.params;
        const proyect = await this.verifyProyectFun(pyid);
        if (proyect === null) { return res.json404("Proyect Not Found!(C)"); };
        const proyectDeleted = await this.pService.destroyById(pyid);
        return res.json200(proyectDeleted);
    };

    verifyProyectFun = async (pyid) => {
        if (!isValidObjectId(pyid)) { return res.json400("Invalid Proyect Id"); };
        const verify = await this.pService.readById(pyid);
        if (!verify) { return null }
        else { return verify; };
    };
};

const proyectsController = new ProyectsController();

export default proyectsController;