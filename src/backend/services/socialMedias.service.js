import { socialMediasRepository } from "../repositories/repository.js";

class SocialMediasService {
    constructor() {
        this.manager = socialMediasRepository;
    };

    createOne = async (data) => await this.manager.createOne(data);
    readAll = async () => await this.manager.readAll();
    readById = async (sid) => await this.manager.readById(sid);
    readByFilter = async (filter) => await this.manager.readByFilter(filter);
    updateById = async (sid, data) => await this.manager.updateById(sid, data);
    destroyById = async (sid) => await this.manager.destroyById(sid);
};

const socialMediasService = new SocialMediasService(socialMediasRepository);

export default socialMediasService;