import { sequelize } from "../database/db.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define('users',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING,
    }
})