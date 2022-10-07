import Sequelize from "sequelize";
import database from "../../../CONFIG/database.js";

const conn = database();
const Types = Sequelize.DataTypes;

const accounts = conn.define('accounts', {
    id: {
        type: Types.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'IDCUENTA'
    },
    SALDO_INICIAL: {
        type: Types.DECIMAL(10, 2),
        defaultValue: 0,
    },
    CUENTA: {
        type: Types.ENUM('Ahorro', 'Corriente'),
        allowNull: false,
    },
    SALDO: {
        type: Types.DECIMAL(10, 2),
        defaultValue: 0,
    }
},
    {
        timestamps: false,
        tableName: 'CUENTAS',
    })

export const AccountsSchema = accounts;