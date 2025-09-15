import { languagesRepository } from "../repositories/repository.js";

class LanguagesService {
    constructor() {
        this.manager = languagesRepository;
    };

    createOne = async (data) => await this.manager.createOne(data);
    readAll = async () => await this.manager.readAll();
    readById = async (lid) => await this.manager.readById(lid);
    readByFilter = async (filter) => this.manager.readByFilter(filter);
    updateById = async (lid, data) => this.manager.updateById(lid, data);
    destroyById = async (lid) => this.manager.destroyById(lid);
};

const languagesService = new LanguagesService(languagesRepository);

export default languagesService;