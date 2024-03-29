var express = require('express');
var router = express.Router();
//j'importe le module node fetc
const fetch = require('node-fetch');

// jé déf ma clé
const TMDB_API_KEY  = process.env.TMDB_API_KEY;

router.get('/movies', (req, res) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`)
        .then(response => response.json())
        .then( data => {
            res.json({ movies : data.results }); // reponse qui contient un objet avec la propriété movies
        }).catch(err => console.error('error:' + err))
    });

module.exports = router;