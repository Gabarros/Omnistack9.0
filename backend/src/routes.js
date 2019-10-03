const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controlers/SessionController');
const SpotController = require('./controlers/SpotControler');


const routes = express.Router();

routes.post('/sessions', SessionController.store);
routes.post('/spots', SpotController.store);

module.exports = routes;