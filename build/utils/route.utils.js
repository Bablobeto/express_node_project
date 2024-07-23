"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayRoutes = void 0;
const chalk_1 = __importDefault(require("chalk"));
const displayRoutes = (prefix, routers) => {
    const routes = routers
        .map((router) => router.stack.map((routes) => routes.route))
        .flat();
    console.log("\nAPI routes: \r\n\b", routes
        .map((route) => `${chalk_1.default.green(Object.keys(route.methods)[0].toUpperCase().padEnd(10))} ${chalk_1.default.grey(prefix + route.path)}`)
        .join("\n"), "\n");
};
exports.displayRoutes = displayRoutes;
