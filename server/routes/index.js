const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res) => {
  console.log('called');
  res.json({ message: 'index' });
});


router.get('/movies', (req, res) => {
  Movie.find()
  .then((movies) => res.json(movies))
  .catch((error) => 
    console.log('error 2'))
})

router.get('/movies/:id', (req, res) => {
  Movie.findById(req.params.id)
  .then((movies) => res.json(movies))
  .catch((error) => {
    console.log('error 3')
  })

  
})


module.exports = router;
