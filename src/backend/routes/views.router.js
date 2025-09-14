import viewsController from "../controllers/views.controller.js";
import RouterHelper from "../helpers/router.helper.js";

class ViewsRouter extends RouterHelper {
    constructor() {
        super();
        this.init();
    };

    init = () => {
        //this.render("/", ["public"])
    }
}