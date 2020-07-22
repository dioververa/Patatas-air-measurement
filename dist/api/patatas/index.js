'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _express = require("express");

var controller = _interopRequireWildcard(require("./patatas.controller"));

var router = new _express.Router(); //routes

router.get('/cities', controller.getCities);
router.get('/devices', controller.getDevices);
module.exports = router;