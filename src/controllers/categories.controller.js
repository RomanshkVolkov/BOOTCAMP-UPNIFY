import { CategoriesSchema } from "../models/schemas/categories.schema.js";

const getCategoryById = async (id) => {
    const category = await CategoriesSchema.findOne({
        where: {
            id: id
        }
    });

    if (!category) throw new Error(`Categoria ${id} no existe`);

    return category;
}

export const getCategory = async (req, res) => {
    const { id } = req.params;
    try {

        const category = await getCategoryById(id);

        console.log(category);

        return res.send(category);

    } catch (e) {
        return res.status(404).send(`Error ${e.message}`);
    }
}


export const createCategoria = async (req, res) => {
    const { categoria } = req.body;
    try {
        const newCategory = await CategoriesSchema.create({
            categoria: categoria
        })
        return res.send(newCategory);

    } catch (e) {
        return res.status(404).send(`No se ha podido crear la categoria ${categoria}`);
    }
}
export const updateCategoria = async (req, res) => {
    const { id } = req.params;
    const { categoria } = req.body;

    try {
        let updateCategory = await getCategoryById(id);

        updateCategory.categoria = categoria;

        updateCategory = await updateCategory.save();

        return res.send(updateCategory);

    } catch (e) {
        return res.status(404).send(`Error ${e.message}`);
    }
}
export const deleteCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        let deleteCategory = await getCategoryById(id);

        deleteCategory = await deleteCategory.destroy();

        return res.send(`Categoria ${id} eliminada`);
    } catch (e) {
        res.status(404).send(`${e.message}`);
    }
}


export const getCategorias = async (req, res) => {
    const categories = await CategoriesSchema.findAll();
    return res.send(categories);
}