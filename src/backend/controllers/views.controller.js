import usersService from "../services/users.service.js";

class ViewsController {
    constructor() {
        this.uService = usersService;
    };

    indexView = async (req, res) => {
        //Falta la logica

        const user = req.user || null;
        res.status(200).render("index", {/*FALTA ACA*/ isAdmin: user?.role === "admin" }); //Falta la lógica para el tipo de rol
    };

    /*AUTH VIEWS */

    loginView = async (req, res) => res.status(200).render("login");
    
}

const viewsController = new ViewsController();

export default viewsController;