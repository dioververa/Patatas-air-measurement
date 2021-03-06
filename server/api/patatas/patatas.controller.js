'use strict';
var request = require('request');

var patatasApiUrl = 'https://patatas-air.s3.amazonaws.com';

function handleError(res) {
  
  return (err, statusCode) => {
    statusCode = statusCode || 500;
    res.status(statusCode).send(err);
  };
}

function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;

    return (entity) => {
        if (entity) {
            res.status(statusCode).json(entity);
        }
    };
}

/**
 * make request
 * library 'request' is used for retrieve info from API Patatas
 */
function makeRequest(url) {

  return new Promise((resolve, reject) => {
  // Retrieve info from API Patatas by method get
    request.get({ url: url, json: true}, (err, response, body) => {

      if (err) { 
        reject(err, 500);
      }

      if (response.statusCode !== 200) {
        reject('error', response.statusCode);
      }

      resolve(body)
    })
  })
}

/**
 * Get list of cities
 * restriction: 'none'
 */
export function getCities(req, res) {

  const patatasApiCitiesUrl = `${patatasApiUrl}/cities`
  makeRequest(patatasApiCitiesUrl)
    .then(respondWithResult(res))
    .catch(handleError(res))
}

/**
 * Get list of devices
 * restriction: 'none'
 */
export function getDevices(req, res) {

  const patatasApiDevicesUrl = `${patatasApiUrl}/devices`
  makeRequest(patatasApiDevicesUrl)
    .then(respondWithResult(res))
    .catch(handleError(res))
}
