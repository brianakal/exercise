var express = require('express');
var router = express.Router();

const User = require('../models').pengguna
const sequelize = require('../models').sequelize
/* GET users listing. */


// penulisan menggunakan promise tanpa arrow function
router.get ('/', function (req, res, next) {
  const result = User.findAll()
    .then(function (result) {
      res.json(result)
    })
  });


// penulisan menggunakan promise dengan arrow function
router.get ('/', (req, res, next) => {
  const result = User.findAll()
    .then(result => {
      res.json(result)
    })
  });


  // penulisan menggunakan async await  
router.get('/', async (req, res, next) => {
  const result = await User.findAll()
  res.json(result)

});

router.get('/query/', async (req, res, next) => {
  const sql = 'SELECT id, name FROM view_users'
  const [result] = await sequelize.query(sql) 
  res.json(result)

});

router.get('/query/:id', async (req, res, next) => {
  const sql = `SELECT id, name, email FROM users WHERE id=${req.params.id}` 
  const [result] = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT, raw: false}) 
  res.json(result)

});


router.get('/query/:id/:email', async (req, res, next) => {
  const sql = `SELECT id, name, email FROM users WHERE id=? AND email=?` 
  const [result] = await sequelize.query(sql, { 
    type: sequelize.QueryTypes.SELECT, 
    raw: false,
    replacements:[req.params.id, req.params.email]
  }) 
  res.json(result)

});



module.exports = router;
