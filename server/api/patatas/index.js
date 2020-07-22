'use strict';

import {Router} from 'express';
import * as controller from './patatas.controller';

var router = new Router();

//routes
router.get('/cities', controller.getCities);
router.get('/devices', controller.getDevices);

module.exports = router;
