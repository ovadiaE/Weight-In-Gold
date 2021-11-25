const express = require('express')
const {getGoldValue, displayGoldValue } = require('../controllers/goldvalue')

const router = express.Router();

router.route('/').post(getGoldValue).get(displayGoldValue)

module.exports = router;