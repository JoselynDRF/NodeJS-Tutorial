'use strict';

var express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
  res.end('<h1> Configuracion terminada </h1>');
})

module.exports = router;