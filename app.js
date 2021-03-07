const express = require('express');
const port = 3000;
const app = express();
const path = require ('path');
app.use(express.static(path.join(__dirname, 'public')));


// Setup view engine

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

// Setup create server

app.get('/', (req, res, next) => {
    res.render('index', {
        title: "Paladins APP"
        
    });
})

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
})

