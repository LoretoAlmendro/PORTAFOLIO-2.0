import express from "express";
import { join } from "path";
import path from "path";
import bodyParser from "body-parser";
import hbs from "express-hbs";
import { Sequelize, Model, DataTypes } from "sequelize"; // importar Sequelize
import { sequelize } from "./API/data/db_connectios.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

//Sequelize y DB

import { regionRoutes } from "./API/routes/region.routes.js";
import { comunaRoutes } from "./API/routes/comuna.routes.js";
import { personRoutes } from "./API/routes/persona.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();


// Engine Config
// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

//Middleware=metodo API

app.use(express.json()),
app.use (regionRoutes);
app.use (comunaRoutes);
app.use (personRoutes);

// define directorio archivos publicos
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





