const express = require("express");
/* const { engine } = require("express-handlebars"); */
const app = express();
const hbs = require("hbs");
const path = require("path");
// const helpers = require("./helpers");
const bodyParser = require("body-parser");
const { handlebars } = require("hbs");

//hbs.registerPartial("nav", "{{header}}");
const partialsDir = path.join(__dirname, "/views/partials");
hbs.registerPartials(partialsDir);

app.set('views', path.join(__dirname, 'views'));
//Establecer la ubicacion de los partials y registralos

/* app.engine("handlebars", engine());
app.set('views engine', 'handlebars');

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'base',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialDir: [
        // path to your partials
        path.join(__dirname, 'views/partials')
    ]
})); */
/* app.engine(
    "hbs",
    engine({
        defaultLayout: "main",
        extname: ".hbs",
        partialsDir: "views/partials",
        // helpers: helpers,
    })
); */
// app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "hbs");
app.use("/public", express.static('public'));
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
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
