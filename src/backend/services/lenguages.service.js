import { lenguagesRepository } from "../repositories/repository.js";

class LenguagesService {
    constructor() {
        this.manager = lenguagesRepository;
    };

    createOne = async (data) => await this.manager.createOne(data);
    readAll = async () => await this.manager.readAll();
    readById = async (lid) => await this.manager.readById(lid);
    readByFilter = async (filter) => this.manager.readByFilter(filter);
    updateById = async (lid, data) => this.manager.updateById(lid, data);
    destroyById = async (lid) => this.manager.destroyById(lid);
};

const lenguagesService = new LenguagesService(lenguagesRepository);

export default lenguagesService;