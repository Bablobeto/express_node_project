"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
const axios_1 = require("axios");
const response = (_req, res, next) => {
    res.success = function (message, data, statusCode = axios_1.HttpStatusCode.Ok) {
        return this.status(statusCode).json(Object.assign({ message: message }, { data }));
    };
    res.error = function (message, errors, statusCode = axios_1.HttpStatusCode.BadRequest) {
        return this.status(statusCode).json(Object.assign({ message: message }, { errors }));
    };
    next();
};
exports.response = response;
