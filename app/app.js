"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var UserController_1 = require("../controllers/UserController");
var body_parser_1 = __importDefault(require("body-parser"));
// creates express app, registers all controller routes and returns you express app instance
var app = routing_controllers_1.createExpressServer({
    controllers: [UserController_1.UserController] // we specify controllers we want to use
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// run express application on port 3000
app.listen(3000);
