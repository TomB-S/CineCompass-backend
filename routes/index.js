var express = require('express');
var router = express.Router();
//j'importe le module node fetc
const fetch = require('node-fetch');

// jé déf ma clé
const OWM_API_KEY = process.env.OWM_API_KEY;

router.get('/movies', (req, res) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${OWM_API_KEY}`)
        .then(response => response.json())
        .then( data => {
            res.json({ movies : data.results});
        }).catch(err => console.error('error:' + err))
    });

module.exports = router;