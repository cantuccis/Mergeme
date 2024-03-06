var person = {
  name: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
<<<<<<< HEAD
    return this.name + " " + this.lastName;
=======
    return `${this.firstName} ${this.lastName}`;
>>>>>>> origin/feature/string-interpolation
  }
};

console.log(`Mi nombre es ${person.fullName()}`)
