import RouterHelper from "../helpers/router.helper.js";
import authRouter from "./api/auth.router.js";
import peopleRouter from "./api/people.router.js";

class ApiRouter extends RouterHelper {
    constructor() {
        super();
        this.init();
    };

    init = () => {
        this.use("/auth", authRouter);
        this.use("/people", peopleRouter);
    };
};

const apiRouter = (new ApiRouter()).getRouter();

export default apiRouter;