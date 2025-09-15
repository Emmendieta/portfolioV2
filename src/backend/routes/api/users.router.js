import usersController from "../../controllers/users.controller.js";
import RouterHelper from "../../helpers/router.helper.js";

class UsersRouter extends RouterHelper {
    constructor() {
        super();
        this.init();
    };

    init = () => {
        this.read("/", ["public"], usersController.getAllUsers);
        this.read("/:uid", ["public"], usersController.getUserById);
        this.update("/:uid", ["public"], usersController.updateUserById);
        this.create("/", ["public"], usersController.createUser);
        this.destroy("/:uid", ["public"], usersController.deleteUserById);
    };
};

const usersRouter = (new UsersRouter()).getRouter();

export default usersRouter;