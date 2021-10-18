const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public'));

// app.get('/', function (req, res) {
//     res.render('home', {
//         nombre: 'Melissa',
//         titulo: 'Curso de Node'
//     });
// });
 
// app.get('/generic', function (req, res) {
//     res.render('generic', {
//         nombre: 'Melissa',
//         titulo: 'Curso de Node'
//     });
// });

// app.get('/elements', function (req, res) {
//     res.render('elements', {
//         nombre: 'Melissa',
//         titulo: 'Curso de Node'
//     });
// });

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});