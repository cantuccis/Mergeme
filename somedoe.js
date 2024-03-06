var person = {
  name: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.name + " " + this.lastName;
  }
};

console.log(`Mi nombre es ${person.fullName()}`)
