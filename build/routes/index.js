"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Routes = exports.v1RoutePrefix = void 0;
const express_1 = __importDefault(require("express"));
const route_utils_1 = require("../utils/route.utils");
const todo_route_1 = __importDefault(require("./todo.route"));
const indexRoute = express_1.default.Router();
indexRoute.get("/", (_req, res, _next) => {
    res.success("Welcome!");
});
exports.v1RoutePrefix = "";
exports.v1Routes = [indexRoute, todo_route_1.default];
(0, route_utils_1.displayRoutes)(exports.v1RoutePrefix, exports.v1Routes);
