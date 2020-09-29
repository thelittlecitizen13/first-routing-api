import { Controller, Param, Body, Get, Post, Put, Delete, JsonController, OnUndefined } from "routing-controllers";
import User from '../models/user';

const _ = require('lodash');
var users = require('../data/users').users;
//users = new Array(users);

@JsonController()
export class UserController {
  userStore: User[];

  constructor() {
      this.userStore = [];
      users.forEach((usr: { name: String; email: String; tests: Object; id: number; }) => {
          this.userStore.push(
              new User(usr.name, usr.email, usr.tests, usr.id)
          )
      });
  }
  @Get("/users")
  getAll() {
    return this.userStore;
  }

  @Get("/users/:id")
  @OnUndefined(404)
  getUser(@Param("id") id: number){
      let user = _.find(this.userStore, {id});
      return user;
  }

  @Get("/users/:id/tests")
  @OnUndefined(404)
  getTests(@Param("id") id: number){
      let user = _.find(this.userStore, {id}).tests;
      return user;
  }
}