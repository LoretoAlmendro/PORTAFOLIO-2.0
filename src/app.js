import express from "express";
import { join } from "path";
import path from "path";
import bodyParser from "body-parser";
import hbs from "hbs";
import { Sequelize, Model, DataTypes } from "sequelize"; // importar Sequelize
import { sequelize } from "../src/data/db_connectios.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const partialsDir = join(new URL('.', import.meta.url).pathname, 'views/partials');

hbs.registerPartials(partialsDir);
//app.use(express.static(path.join(__dirname, 'src', 'public')));

// app.set('views', join(new URL('.', import.meta.url).pathname, 'views'));
app.set('views', join(__dirname, 'views'));
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





