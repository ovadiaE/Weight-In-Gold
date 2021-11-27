const express = require('express')
const {getGoldValue, displayGoldValue} = require('../controllers/goldvalue')

const router = express.Router();

router
    .route('/')
    .get(displayGoldValue)
    .post(getGoldValue)

module.exports = router;