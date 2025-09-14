import RouterHelper from "../helpers/router.helper.js";
import apiRouter from "./api.router.js";

class IndexRouter extends RouterHelper {
    constructor() {
        super();
        this.init();
    };

    init = () => {
        this.use("/api", apiRouter);
    };
};

const indexRouter = (new IndexRouter()).getRouter();

export default indexRouter;