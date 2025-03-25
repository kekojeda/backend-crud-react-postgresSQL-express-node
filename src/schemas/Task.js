import { sequelize } from "../database/db.js";
import { DataTypes } from "sequelize";

export const Task = sequelize.define('tasks',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})