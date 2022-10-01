import Sequelize from "sequelize";
import database from "../../../CONFIG/database.js";

const conn = database();
const Types = Sequelize.DataTypes;

const Users = conn.define('users', {
    id: {
        type: Types.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'idusuario'

    },
    name: {
        type: Types.STRING,
        allowNull: false,
        field: 'nombre'
    },
    lastname: {
        type: Types.STRING,
        field: 'apellidoS'
    },
    email: {
        unique: true,
        type: Types.STRING,
        field: 'correo'

    },
    password: {
        type: Types.STRING,
        field: 'contrasenia'
    }

}, {
    timestamps: false,
    tableName: 'usuarios',
})

export const UsersSchema = Users;