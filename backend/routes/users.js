var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models').user
const Inbox = require('../models').inbox
const sequelize = require('../models').sequelize
const Op = require('sequelize').Op
/* GET users listing. */

/* 
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
 */

  // penulisan menggunakan async await  
router.get('/', async (req, res, next) => {
  const result = await User.findAll({
    include: Inbox
  })
  res.json(result)

});


router.post('/addDataSequelize', async (req, res, next) => {
  console.log(req.body)
  const result = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    created_at: new Date,
    updated_at: new Date,

  })
  res.json(result)
});

router.post('/addDataQuery', async (req, res, next) => {
  const sql = 'INSERT INTO users (name, email, password, created_at, updated_at) VALUES (?, ?, ?, ?, ?)'

  const result = await sequelize.query(sql, {
    replacements:[
      req.body.name,
      req.body.email,
      bcrypt.hashSync(req.body.password),
      new Date,
      new Date,
    ],
    type: sequelize.QueryTypes.INSERT
  }) 
  res.json(result)
})

router.post('/saveDataDuaTableQuery', async (req, res, next) => {
  const sql = `INSERT INTO users 
                (name, email, password, created_at, updated_at) 
                VALUES (?, ?, ?, ?, ?) RETURNING id`

  const [[result]] = await sequelize.query(sql, {
    replacements:[
      req.body.name,
      req.body.email,
      bcrypt.hashSync(req.body.password),
      new Date,
      new Date,
    ],
    type: sequelize.QueryTypes.INSERT
  }) 

  console.log(result)
  res.json(result)

  const sql2 = `INSERT INTO profiles
                (id_users, full_name, address, company, created_at, updated_at) 
                VALUES (?, ?, ?, ?, ?, ?)`

  const [[result2]] = await sequelize.query(sql2, {
    replacements:[
      result.id,
      req.body.name,
      'alamat',
      'perusahaan',
      new Date,
      new Date,
    ],
    type: sequelize.QueryTypes.INSERT
  })

  res.json(result2)
})

router.get('/query/', async (req, res, next) => {
  const sql = 'SELECT id, name FROM users'
  const [result] = await sequelize.query(sql) 
  res.json(result)

});

router.get('/query/:id', async (req, res, next) => {
  const sql = `SELECT id, name, email FROM users WHERE id=${req.params.id}` 
  const [result] = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT, raw: false}) 
  res.json(result)

});



module.exports = router;
