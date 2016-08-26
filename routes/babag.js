var express = require('express');
var app = express();
var babagController = require('./../Controllers/babag');


var router = express.Router();

router.get('/', babagController.getBabag);
router.post('/set', babagController.saveBabag);


module.exports = router;
