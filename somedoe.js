var person = {
  name: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
<<<<<<< HEAD
    return this.name + " " + this.lastName;
=======
    return `${this.firstName} ${this.lastName}`;
>>>>>>> 0a696d3ac90ca8ddb2f809a8341646540c5c0076
  }
};

console.log(`Mi nombre es ${person.fullName()}`)
