import RouterHelper from "../helpers/router.helper.js";
import authRouter from "./api/auth.router.js";

class ApiRouter extends RouterHelper {
    constructor() {
        super();
        this.init();
    };

    init = () => {
        this.use("/auth", authRouter);
    };
};

const apiRouter = (new ApiRouter()).getRouter();

export default apiRouter;