"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var routing_controllers_1 = require("routing-controllers");
var user_1 = __importDefault(require("../models/user"));
var _ = require('lodash');
var users = require('../data/users').users;
//users = new Array(users);
var UserController = /** @class */ (function () {
    function UserController() {
        var _this = this;
        this.userStore = [];
        users.forEach(function (usr) {
            _this.userStore.push(new user_1.default(usr.name, usr.email, usr.tests, usr.id));
        });
    }
    UserController.prototype.getAll = function () {
        return this.userStore;
    };
    UserController.prototype.getUser = function (id) {
        var user = _.find(this.userStore, { id: id });
        return user;
    };
    UserController.prototype.getTests = function (id) {
        var user = _.find(this.userStore, { id: id }).tests;
        return user;
    };
    __decorate([
        routing_controllers_1.Get("/users"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "getAll", null);
    __decorate([
        routing_controllers_1.Get("/users/:id"),
        routing_controllers_1.OnUndefined(404),
        __param(0, routing_controllers_1.Param("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "getUser", null);
    __decorate([
        routing_controllers_1.Get("/users/:id/tests"),
        routing_controllers_1.OnUndefined(404),
        __param(0, routing_controllers_1.Param("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "getTests", null);
    UserController = __decorate([
        routing_controllers_1.JsonController(),
        __metadata("design:paramtypes", [])
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
