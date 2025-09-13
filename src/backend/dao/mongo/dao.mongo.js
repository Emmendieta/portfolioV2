import { CategoryModel } from "./models/Categories.Models.js";
import { EducationModel }  from "./models/Educations.Models.js";
import { LenguagesModel } from "./models/Lenguages.Models.js";
import { PeopleModel } from "./models/People.Models.js";
import { ProyectsModel } from "./models/Proyects.Models.js";
import { SocialMediaModel } from "./models/SocialMedias.Models.js";
import { UsersModel } from "./models/Users.Models.js";
import { WorksModel } from "./models/Works.Models.js";

class DaoMongo {
    constructor(model) {
        this.model = model;
    };
    createOne = async (data) => await this.model.insertOne(data);
    createMany = async (data) => await this.model.insertMany(data);
    readAll = async (filter) => await this.model.find(filter);
    readById = async (id) => await this.model.findById(id);
    readByFilter = async (filter) => await this.model.findOne(filter);
    updateById = async (id, data) => await this.model.FindByIdAndUpdate(id, data, { new: true });
    destroyById = async (id) =>await this.model.findByIdAndDelete(id);

};

const categoryManager = new DaoMongo(CategoryModel);
const educationManager = new DaoMongo(EducationModel);
const lenguagesManager = new DaoMongo(LenguagesModel);
const peopleManager = new DaoMongo(PeopleModel);
const proyectsManager = new DaoMongo(ProyectsModel);
const socialMediasManager = new DaoMongo(SocialMediaModel);
const usersManager = new DaoMongo(UsersModel);
const worksManager = new DaoMongo(WorksModel);

export { categoryManager, educationManager, lenguagesManager, peopleManager, proyectsManager, socialMediasManager,usersManager, worksManager };