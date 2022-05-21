const useRouter = require('./user.router');
const { API_VERSION } = require('../../config');
const express = require('express');

function routerApi(app) {
    const dynamicRoutes = express.Router();
    app.use(`/api/${API_VERSION}`, dynamicRoutes);
    dynamicRoutes.use('/users', useRouter);
}

module.exports = routerApi;