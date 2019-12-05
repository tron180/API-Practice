process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
const MongoAdapter = require("../Adapters/mongoAdapter");
const ArrayAdapter = require("../Adapters/arrayApdapter");
const FileAdapter = require("../Adapters/fileAdapter");
const BuiltAdapter = require("../Adapters/builtIOAdapter");

const mongoAdapter = new MongoAdapter();
const arrayAdapter = new ArrayAdapter();
const fileAdapter = new FileAdapter();
const builtAdapter = new BuiltAdapter();

const Person = require("../Models/person");
const Vehicle = require("../Models/vehicle");

// const person = new Person(mongoAdapter);
// const vehicle = new Vehicle(mongoAdapter);

const chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);
const adapters = {
  mongo: mongoAdapter,
  file: fileAdapter,
  array: arrayAdapter,
  builtio: builtAdapter
};

Object.keys(adapters).map(item => {
  describe("Records", function() {
    this.timeout(7000);
    before(done => {
      Promise.resolve()
        .then(() => {
          return new Person(adapters[item]);
        })
        .then(instance => {
          return instance.delete();
        })
        .then(() => {
          done();
        })
        .catch(err => {
          throw err;
        });
    });
    describe("/GET Request", () => {
      beforeEach(done => {
        Promise.resolve()
          .then(() => {
            return new Person(adapters[item]);
          })
          .then(instance => {
            return instance.delete();
          })
          .then(() => {
            done();
          });
      });
      it("should GET empty data", done => {
        this.timeout(20000);
        chai
          .request(server)
          .get("/adapters/mongo/models/person/objects")
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("array");
            res.body.data.length.should.be.eql(0);
            done();
          });
      });
    });
    describe("/POST Request", () => {
      it("should return data entered just now", done => {
        this.timeout(20000);
        let record = {
          name: "Clark",
          birth_year: 1995
        };
        chai
          .request(server)
          .post(record)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("name");
            res.body.should.have.property("birth_year");
            done();
          });
      });
    });
  });
});
