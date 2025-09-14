import usersService from "../services/users.service.js";
import { createHash } from "../helpers/hash.helper.js";
import { isValidObjectId } from "mongoose";

class UsersController {
    constructor() {
        this.uService = usersService;
    };

    createUser = async (req, res) => {
        const data = req.body;
        if (!data || !data.user || !data.email || !data.password) { return res.json400("Missing Information!(C)"); };
        const passHash = createHash(data.password)
        data.password = passHash;
        const user = await this.uService(data);
        return res.json201(user);
    };

    getUserById = async (req, res) => {
        const { uid } = req.params;
        const user = await this.verifyUserFun(uid);
        if (user === null) { return res.json404("User Not Found!(C)"); };
        return res.json200(user);
    };

    getuserByFitlter = async (req, res) => {
        const { email } = req.params;
        if(!email) { return res.json400("Missing Email!(C)"); };
        const user = await this.uService.readByFilter( { email });
        if (!user) { return res.json404("User Not Found!(C)"); };
        return res.json200(user);
    };

    getAllUsers = async (req, res) => {
        const users = await this.uService.getAllUsers();
        if (user.length === 0) { return res.json404("Not Users Found!(C)"); };
        return res.json200(users);
    };

    updateUserById = async (req, res) => {
        const { uid } = req.params;
        const data = req.body;
        if (!data) { return res.json400("No Information to Update!(C)"); };
        const user = await this.verifyUserFun(uid);
        if (user === null) { return res.json404("User Not Found!"); }
        const userUpdated = await this.uService.updateById(uid, data);
        return res.json200(userUpdated);
    };

    deleteUserById = async (req, res) => {
        const { uid } = req.params;
        const user = await this.verifyUserFun(uid);
        if (user === null) { return res.json404("User Not Found!(C)"); };
        const userDeleted = await this.uService.destroyById(uid);
        return res.json200(userDeleted);
    };

    verifyUserFun = async (uid) => {
        if(!isValidObjectId(uid)) { return res.json400("Invalid User ID!(C)"); };
        const verify = await this.uService.readById(uid);
        if (!verify) { return null; }
        else { return verify; };
    };

    //No se esta usando por ahora esta funcion:
    verifyUserAndEmailFun = async (uid, email) => {
        if(!isValidObjectId(uid)) { return res.json400("Invalid User ID!(C)"); };
        const verify = await this.uService.readById(uid);
        if (!verify) { return null; }
        else if (verify.email !== email) { return false; }
        else { return verify; };
    };
};

const usersController = new UsersController();

export default usersController;