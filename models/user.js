"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email, tests, id) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.tests = tests;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.toJsON = function () {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            tests: this.tests
        };
    };
    return User;
}());
exports.default = User;
