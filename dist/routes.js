/**
 * Main application routes
 */
'use strict'; //import errors from './components/errors';
//import path from 'path';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var errors = require('./components/errors');

var path = require('path');

function _default(app) {
  // Insert routes below
  app.use('/api/patatas', require('./api/patatas')); // All undefined asset or api routes should return a 404

  app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(errors[404]); // All other routes should redirect to the index.html

  app.route('*').get(function (req, res) {
    var pathClient = path.join("".concat(__dirname, "/.."), 'client/dist/index.html');
    var pathIndexProd = path.resolve(pathClient);
    return res.sendFile(pathIndexProd);
  });
}