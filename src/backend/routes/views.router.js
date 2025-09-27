import viewsController from "../controllers/views.controller.js";
import RouterHelper from "../helpers/router.helper.js";

class ViewsRouter extends RouterHelper {
    constructor() {
        super();
        this.init();
    };

    init = () => {
        this.render("/", ["public"], viewsController.indexView);

        /*USERS*/
        this.render("/login", ["public"], viewsController.loginView);
        this.render("/profile", ["user", "admin"], viewsController.profileView);
    }
};

const viewsRouter = (new ViewsRouter()).getRouter();

export default viewsRouter;