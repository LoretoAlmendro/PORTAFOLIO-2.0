import { DataTypes, Model } from "sequelize";
// import { sequelize } from "../data/db_connectios.js";
import { sequelize } from "../data/db_connectios.js";

class Persona extends Model { }

export const persona = Persona.init({
    name: { type: DataTypes.TEXT },
},
    {
        sequelize, modelName: "Personas",
        timestamps: false,
        createdAt: false,
    }
);