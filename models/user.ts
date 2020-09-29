export default class User {
    id: number;
    name: String;
    email: String;
    tests: Object;
  
    constructor(name: String, email: String, tests: Object, id: number) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.tests = tests;
    }
  
    getName() {
      return this.name;
    }

    toJsON(){
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            tests: this.tests
        }
    }
  }