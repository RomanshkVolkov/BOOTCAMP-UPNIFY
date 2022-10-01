import Sequelize from "sequelize";
import database from "../../../CONFIG/database.js";

const conn = database();
const Types = Sequelize.DataTypes;

const categories = conn.define('categories', {
    id: {
        type: Types.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'IDCATEGORIA'
    },
    categoria: {
        type: Types.STRING,
        allowNull: false,
    }

},
{
    timestamps: false,
    tableName: 'CATEGORIAS',
})

export const CategoriesSchema = categories;