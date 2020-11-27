'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Enviroment variables require
require('dotenv').config();

//Connection to mongodb with .env credentials on .env file
// Imports to be used
const conectarDB = async () => {
    try {
        await _mongoose2.default.connect(process.env.DB_MONGO, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = conectarDB;