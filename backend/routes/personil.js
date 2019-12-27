var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getPersonil', function(req, res, next) {
  res.json('respond with a resource');
});

router.get('/getPersonil', (req, res)=> { 
  res.json({
    nama_lengkap : 'Brian',
    divisi: 'SIM'
  })
})

module.exports = router;
