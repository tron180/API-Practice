console.log("Started....");
const ArrayAdapter = require("./arrayApdapter");
const Person = require("./person.js");
const info = require("./database.json");
const MongoAdapter = require("./mongoAdapter");
const FileAdapter = require("./fileAdapter");
const BuiltAdapter = require("./builtIOAdapter");

let arrayAdapter = new ArrayAdapter();
let mongoAdapter = new MongoAdapter();
let fileAdapter = new FileAdapter();
let builtAdapter = new BuiltAdapter();
let p1 = new Person(builtAdapter);

p1.delete()
  .then(() => {
    return p1.save({ name: "Alice", birth_year: 1995 });
  })
  .then(object => {
    console.log("Successfully Added..!! " + JSON.stringify(object));
  })
  .catch(err => {
    console.log("Something went wrong.", err);
  })

  .then(() => {
    return p1.save({ name: "John", birth_year: 1995 });
  })
  .catch(err => {
    console.log("Something went wrong.", err);
  })

  .then(object => {
    console.log("Successfully Added..!! " + JSON.stringify(object));
    return p1.save({ name: "Clark", birth_year: 1996 });
  })
  .catch(err => {
    console.log("Something went wrong.", err);
  })

  .then(object => {
    console.log("Successfully Added..!! " + JSON.stringify(object));
    return p1.find({ age: 24, name: 'John' });
  })
  .catch(err => {
    console.log("Data Not Found.", err);
  })

  .then(object => {
    console.log("Successfully Found...!!", JSON.stringify(object));
    return p1.update({ name: "John" }, { name: "Johnathen" });
  })
  .catch(err => {
    console.log("Data Not Found for Updation.", err);
  })

  .then(object => {
    console.log("Successfully Found...!!", JSON.stringify(object));
    return p1.delete({ name: "Alice" });
  })
  .catch(err => {
    console.log("delete failed", err);
  })

  .then(object => {
    console.log("Successfully Deleted..!!", JSON.stringify(object));
    return p1.find();
  })
  .catch(err => {
    console.log("Data Not Found.", err);
  })

  .then(object => {
    console.log("Successfully Found...!!", JSON.stringify(object));
    return object;
  });
