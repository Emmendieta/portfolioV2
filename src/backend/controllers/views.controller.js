import educationsService from "../services/educations.service.js";
import peopleService from "../services/people.service.js";
import usersService from "../services/users.service.js";
import worksService from "../services/works.service.js";
import proyectsService from "../services/proyects.service.js";
import languagesServices from "../services/languages.service.js";

class ViewsController {
    constructor() {
        this.pService = peopleService;
        this.uService = usersService;
        this.eService = educationsService;
        this.wService = worksService;
        this.proService = proyectsService;
        this.lService = languagesServices;
    };

    indexView = async (req, res) => {
        //Falta la logica
        //FALTA EN EL CASO DE QUE NO HAYA ELEMENTOS PARA CADA UNO:
        const educations = await this.eService.readAll();
        const person = await this.pService.readAll();
        const works = await this.wService.readAll();
        const proyects = await this.proService.readAll();
        const languages = await this.lService.readAll();



        const user = req.user || null;
        res.status(200).render("index", {educations, person, works, proyects,languages, isAdmin: user?.role === "admin" }); //Falta la lógica para el tipo de rol
    };

    /*AUTH VIEWS */

    loginView = async (req, res) => res.status(200).render("login");

    profileView = async (req, res) => {
        const { user } = req;
        const uid = user._id;
        const userPopulate = await this.uService.readByIdAndPopulate(uid, ["person"]);
        res.status(200).render("profile", { user: userPopulate });
    };

    updatePersonView = async (req, res) => {
        const { user } = req;
        const uid = user._id;
        const userPopulate = await this.uService.readByIdAndPopulate(uid, ["person"]);
        res.status(200).render("update-person", { user: userPopulate });
    };

    updateUserView = async (req, res) => {
        const { user } = req;
        const uid = user._id;
        const userData = await this.uService.readById(uid);
        res.status(200).render("update-user", { user: userData });
    };
    
};

const viewsController = new ViewsController();

export default viewsController;