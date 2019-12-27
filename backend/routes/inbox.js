var express = require('express');
var router = express.Router();

const Inbox = require('../models').inbox
const sequelize = require('../models').sequelize
/* GET inboxes listing. */

  // penulisan menggunakan async await  
router.get('/', async (req, res, next) => {
  const result = await Inbox.findAll( {}, {include:'user'} )
  res.json(result)

});

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
