var person = {
  name: "Johnn",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(`Mi nombre es ${person.fullName()}`)
