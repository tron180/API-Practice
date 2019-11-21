console.log("Started....");
const ArrayAdapter = require("./Adapters/arrayApdapter");
const MongoAdapter = require("./Adapters/mongoAdapter");
const FileAdapter = require("./Adapters/fileAdapter");
const BuiltAdapter = require("./Adapters/builtIOAdapter");
const Person = require("./Models/person");
const Vehicle = require("./Models/vehicle");

let arrayAdapter = new ArrayAdapter();
let mongoAdapter = new MongoAdapter();
let fileAdapter = new FileAdapter();
let builtAdapter = new BuiltAdapter();
let p1 = new Person(mongoAdapter);
let v1 = new Vehicle(builtAdapter);

const testPersonModel = () => {
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
      return p1.find({ age: 24, name: "John" });
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
      console.log("Successfully Updated...!!", JSON.stringify(object));
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
};

const testVehicleModel = () => {
  return v1.delete()
    .then(() => {
      return v1.save({ name: "Maruti Xen", company_name: "Maruti", convertible: false })
    })
    .then(object => {
      console.log("Successfully Added..!! " + JSON.stringify(object));
    })
    .catch(err => {
      console.log("Something went wrong.", err);
    })

    .then(() => {
      return v1.save({
        name: "Duster",
        company_name: "Reanualt",
        convertible: false
      });
    })
    .catch(err => {
      console.log("Something went wrong.", err);
    })

    .then(object => {
      console.log("Successfully Added..!! " + JSON.stringify(object));
      return v1.save({
        name: "i20",
        company_name: "Maruti",
        convertible: true
      });
    })
    .catch(err => {
      console.log("Something went wrong.", err);
    })

    .then(object => {
      console.log("Successfully Added..!! " + JSON.stringify(object));
      return v1.find({ convertible: false, name: "Duster" });
    })
    .catch(err => {
      console.log("Data Not Found.", err);
    })

    .then(object => {
      console.log("Successfully Found...!!", JSON.stringify(object));
        return v1.update({ name: "i20" }, { name: "i10" });
      })
      .catch(err => {
        console.log("Data Not Found for Updation.", err);
      })

      .then(object => {
        console.log("Successfully Updated...!!", JSON.stringify(object));
        return v1.delete({ name: "Duster" });
      })
      .catch(err => {
        console.log("delete failed", err);
      })

      .then(object => {
        console.log("Successfully Deleted..!!", JSON.stringify(object));
        return v1.find();
      })
      .catch(err => {
        console.log("Data Not Found.", err);
      })

      .then(object => {
        console.log("Successfully Found...!!", JSON.stringify(object));
        return object;
    });
};

testPersonModel();
