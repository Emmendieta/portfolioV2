import RouterHelper from "../helpers/router.helper.js";
import authRouter from "./api/auth.router.js";
import peopleRouter from "./api/people.router.js";
import usersRouter from "./api/users.router.js";
import categoriesRouter from "./api/categories.router.js";

class ApiRouter extends RouterHelper {
    constructor() {
        super();
        this.init();
    };

    init = () => {
        this.use("/auth", authRouter);
        this.use("/people", peopleRouter);
        this.use("/users", usersRouter);
        this.use("/categories", categoriesRouter);
    };
};

const apiRouter = (new ApiRouter()).getRouter();

export default apiRouter;