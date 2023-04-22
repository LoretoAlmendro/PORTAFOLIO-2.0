/* import pg from "pg";
const { Pool } = pg; */
import { argv } from "node:process";
import _yargs from "yargs";
import { hideBin } from "yargs/helpers";
const yargs = _yargs(hideBin(process.argv));
import { Sequelize, Model, DataTypes } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

//Crear conexión
const sequelize = new Sequelize("postgres", "postgres", process.env.SUPABASE_PASS, {
    host: "db.vuuyricpkrwfpcyppnfu.supabase.co",
    dialect: "postgres",
});


try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

class Persona extends Model { }
class Region extends Model { }
class Comuna extends Model { }

Persona.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    apellido: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    edad: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    formacion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    estudiante: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, { sequelize, modelName: 'Persona' });


Region.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, { sequelize, modelName: 'Region' });

Comuna.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, { sequelize, modelName: 'Comuna' });


//Enlace tipo model
Region.hasMany(Persona);
// Usuario.hasMany(Publicacion, { as: 'publicaciones' });
Persona.belongsTo(Region);

// Crear tabla si no existe (no hacer nada si no existe)
// await sequelize.sync({});
