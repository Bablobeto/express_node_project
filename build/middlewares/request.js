"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const request = (req, _res, next) => {
    req.updateContext = function (data) {
        req.context = Object.assign(Object.assign({}, req.context), data);
        return req.context;
    };
    next();
};
exports.request = request;
