import express from "express";
import { join } from "path";
import bodyParser from "body-parser";
import hbs from "hbs";
import { sequelize } from "../data/db_connectios.js";

const app = express();
const partialsDir = join(new URL('.', import.meta.url).pathname, 'views/partials');

hbs.registerPartials(partialsDir);

app.set('views', join(new URL('.', import.meta.url).pathname, 'views'));
app.set("view engine", "hbs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { title: 'Mi página HBS' });
});

app.get('/indice', (req, res) => {
    res.render('indice', { title: 'Indice' });
});

app.get('/cualidades', (req, res) => {
    res.render('cualidades', { title: 'Menu cualidades' });
});

app.get('/contraste', (req, res) => {
    res.render('contraste',)
})

app.get('/tono', (req, res) => {
    res.render('TONO',)
})

app.get('/saturacion', (req, res) => {
    res.render('SATURACION',)
})

app.get('/matiz', (req, res) => {
    res.render('MATIZ',)
})

app.get('/luminosidad', (req, res) => {
    res.render('LUMINOSIDAD',)
})

app.get('/formulario', (req, res) => {
    res.render('FORMULARIO',)
})

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});





/* import pg from "pg";
const { Pool } = pg; */
import { argv } from "node:process";
import _yargs from "yargs";
import { hideBin } from "yargs/helpers";
const yargs = _yargs(hideBin(process.argv));
import { Sequelize, Model, DataTypes } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
import { comunaRoutes } from './routes/comuna.routes.js';
import { personRoutes } from './routes/persona.routes.js';
import { regionRoutes } from './routes/region.routes.js';

//Conexion a BD
app.use(express.json());
app.use(comunaRoutes);
app.use(personRoutes);
app.use(regionRoutes);




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
await sequelize.sync({ force: true });