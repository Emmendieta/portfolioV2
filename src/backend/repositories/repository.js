import { categoryManager, educationManager, lenguagesManager, peopleManager, proyectsManager, socialMediasManager, usersManager, worksManager } from "../dao/mongo/dao.mongo.js";
import CategoriesDTO from "../dto/Categories.dto.js";
import EducationsDTO from "../dto/Educations.dto.js";
import LanguagesDTO from "../dto/Lenguages.dto.js";
import PeopleDTO from "../dto/People.dto.js";
import ProyectsDTO from "../dto/Proyects.dto.js";
import SocialMediasDTO from "../dto/SocialMedias.dto.js";
import UsersDTO from "../dto/Users.dto.js";
import WorksDTO from "../dto/Works.dto.js";

class Repository {
    constructor(manager, Dto) {
        this.manager = manager;
        this.Dto = Dto;
    };

    createOne = async (data) => await this.manager.createOne(new this.Dto(data));
    readAll = async () => await this.manager.readAll();
    readById = async (id) => await this.manager.readById(id);
    readByFilter = async (filter) => await this.manager.readByFilter(filter);
    updateById = async (id, data) => await this.manager.updateById(id, data);
    destroyById = async (id) => await this.manager.destroyById(id);
};

const categoriesRepository = new Repository(categoryManager, CategoriesDTO);
const educationsRepository = new Repository(educationManager, EducationsDTO);
const lenguagesRepository = new Repository(lenguagesManager, LanguagesDTO);
const peopleRepositry = new Repository(peopleManager, PeopleDTO);
const proyectsRepository = new Repository(proyectsManager, ProyectsDTO);
const socialMediasRepository = new Repository(socialMediasManager, SocialMediasDTO);
const usersRepository = new Repository(usersManager, UsersDTO);
const worksRepository = new Repository(worksManager, WorksDTO);

export {categoriesRepository, educationsRepository, lenguagesRepository, peopleRepositry, proyectsRepository, socialMediasRepository, usersRepository, worksRepository };


