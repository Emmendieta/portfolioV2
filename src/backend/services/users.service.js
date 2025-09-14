import { usersRepository } from "../repositories/repository.js";

class UsersService {
    constructor() {
        this.manager = usersRepository;
    };
    createOne = async (data) => await this.manager.createOne(data);
    readAll = async () => await this.manager.readAll();
    readById = async (uid) => await this.manager.readById(uid);
    readByFilter = async (filter) => await this.manager.readByFilter(filter);
    updateById = async (uid, data) => await this.manager.updateById(uid, data);
    destroyById = async (uid) => await this.manager.destroyById(uid);
};

const usersService = new UsersService(usersRepository);

export default usersService;