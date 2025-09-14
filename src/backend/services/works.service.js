import { worksRepository } from "../repositories/repository.js";

class WorksService {
    constructor() {
        this.manager = worksRepository;
    };
    createOne = async (data) => await this.manager.createOne(data);
    readAll = async () => await this.manager.readAll();
    readById = async (wid) => await this.manager.readById(wid);
    readByFilter = async (filter) => await this.manager.readByFilter(filter);
    updateById = async (wid, data) => await this.manager.updateById(wid, data);
    destroyById = async (wid) => await this.manager.destroyById(wid);
};

const worksService = new WorksService(worksRepository);

export default worksService;