import proyectsController from "../../controllers/proyects.controller.js";
import RouterHelper from "../../helpers/router.helper.js";

class ProyectsRouter extends RouterHelper {
    constructor() {
        super();
        this.init();
    };

    init = () => {
        this.read("/", ["public"], proyectsController.getAllProyects);
        this.read("/:pyid", ["public"], proyectsController.getProyectById);
        this.create("/", ["public"], proyectsController.createProyect);
        this.update("/:pyid", ["public"], proyectsController.updateProyectById);
        this.destroy("/:pyid", ["public"], proyectsController.deleteProyectById);
    };
};

const proyectsRouter = (new ProyectsRouter()).getRouter();

export default proyectsRouter;