const express = require('express');
let router = express.Router();

router
  .route('/search/:query')
  .get((req, res) => {
    console.log(req.params.query)
    res.send('got it');
  })

module.exports = router;