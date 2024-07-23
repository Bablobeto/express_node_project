"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const axios_1 = require("axios");
function errorHandler(err, _req, res, _next) {
    console.error("🚨", err);
    return res.status(err.statusCode).json(Object.assign({ message: err.statusCode === axios_1.HttpStatusCode.InternalServerError
            ? "Server Error! Please try again."
            : err.message }, (process.env.NODE_ENV !== "production" && {
        error: err,
        stack: err.stack,
    })));
}
