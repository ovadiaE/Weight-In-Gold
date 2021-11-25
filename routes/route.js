const express = require('express')
const {getGoldValue} = require('../controllers/goldvalue')

const router = express.Router();

router.route('/').post(getGoldValue)

module.exports = router;