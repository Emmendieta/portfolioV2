import { isValidObjectId } from "mongoose";
import categoriesService from "../services/cateogires.service.js";

class CategoriesController {
    constructor() {
        this.cService = categoriesService;
    };

    createCategory = async (req, res) => {
        const data = req.body;
        if (!data || !data.title) { return res.json400("Missing information!(C)"); };
        const category = await this.cService.createOne(data);
        res.json201(category);
    };

    getCategoryById = async (req, res) => {
        const { cid } = req.params;
        const category = this.verifyCategoryFun(cid);
        if (category === null) { return res.json400("Category Not Found!(C)"); };
        res.json200(category);
    };

    getCategoryByFilter = async (req, res) => {
        //FALTA EL DEL FILTRO
    };

    getAllCategories = async (req, res) => {
        const categories = await this.cService.readAll();
        if (categories.length === 0) { return res.json404("No categories found!(C)"); };
        return res.json200(categories);
    };

    updateCategoryById = async (req, res) => {
        const { cid } = req.params;
        const data = req.body;
        if(!data) { return res.json400("No data to update!(C)"); };
        const category = await this.verifyCategoryFun(cid);
        if (category === null) { return res.json400("Category Not Found!(C)"); };
        const categoryUpdated = await this.cService.updateById(cid, data);
        return res.json200(categoryUpdated);
    };

    deleteCategoryById = async (req, res) => {
        const { cid } = req.params;
        const category = await this.verifyCategoryFun(cid);
        if (category === null) { return res.json400("Category Not Found!(C)"); };
        const categoryDeleted = await this.cService.destroyById(cid);
        if (!categoryDeleted) { return res.json404("Couldn't Delete the Category!(C)"); };
        return res.json200(categoryDeleted);
    };


    verifyCategoryFun = async (cid) => {
        if(!isValidObjectId(cid)) { return res.json400("Invalid Category Id!(C)"); };
        const verify = await this.cService.getCategoryById(cid);
        if (!verify) { return null }
        else { return verify; }
    };
};

const categoriesController = new CategoriesController();

export default categoriesController;