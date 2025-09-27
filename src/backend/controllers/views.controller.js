import educationsService from "../services/educations.service.js";
import peopleService from "../services/people.service.js";
import usersService from "../services/users.service.js";
import worksService from "../services/works.service.js";
import proyectsService from "../services/proyects.service.js";

class ViewsController {
    constructor() {
        this.pService = peopleService;
        this.uService = usersService;
        this.eService = educationsService;
        this.wService = worksService;
        this.proService = proyectsService;
    };

    indexView = async (req, res) => {
        //Falta la logica
        //FALTA EN EL CASO DE QUE NO HAYA ELEMENTOS PARA CADA UNO:
        const educations = await this.eService.readAll();
        const person = await this.pService.readAll();
        const works = await this.wService.readAll();
        const proyects = await this.proService.readAll();



        const user = req.user || null;
        res.status(200).render("index", {educations, person, works, proyects, isAdmin: user?.role === "admin" }); //Falta la lógica para el tipo de rol
    };

    /*AUTH VIEWS */

    loginView = async (req, res) => res.status(200).render("login");
    
}

const viewsController = new ViewsController();

export default viewsController;