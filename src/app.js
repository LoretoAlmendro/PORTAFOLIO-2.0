const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const hbs = require("hbs");
const path = require("path");
// const helpers = require("./helpers");
const bodyParser = require("body-parser");

const partialsDir = path.join(__dirname, "/views/partials");
hbs.registerPartial("nav", "{{header}}");
hbs.registerPartials(partialsDir);

//Establecer la ubicacion de los partials y registralos
app.engine(
    "hbs",
    engine({
        defaultLayout: "main",
        extname: ".hbs",
        partialsDir: "views/partials",
        // helpers: helpers,
    })
);

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "hbs");
app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

/* app.get('/CSS/index.css', function (req, res) {
    res.type('text/css');
    res.sendFile(__dirname + '/public/CSS/index.css');
});
 */

/*Get PLANTILLAS HBS*/
app.get('/', (req, res) => {
    res.render('index', { title: 'Mi página HBS' });
});

app.get('/indice', (req, res) => {
    res.render('indice', { title: 'Indice' });
});

app.get('/cualidades', (req, res) => {
    res.render('cualidades', { title: 'Menu cualidades' });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
