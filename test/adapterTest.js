process.env.NODE_ENV = "test";

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
const should = chai.should();

chai.use(chaiHttp);

const adapters = {
  mongo: mongoAdapter,
  file: fileAdapter,
  array: arrayAdapter,
  builtio: builtAdapter
};

Object.keys(adapters).map(item => {
  describe("Records", function() {
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
        })
        .catch(err => {
          throw err;
        });
    });
    describe(`${item} /GET Request`, () => {
      it("should GET empty data", done => {
        Promise.resolve().then(() => {
          chai
            .request(server)
            .get(`/adapters/${item}/models/person/objects`)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.data.should.be.a("array");
              res.body.data.length.should.be.eql(0);
              done();
            });
        });
      });
      it("should GET the data from the database", done => {
        Promise.resolve()
          .then(() => {
            return new Person(adapters[item]);
          })
          .then(instance => {
            let record = {
              name: "Alice",
              birth_year: 1996
            };
            return instance.save(record);
          })
          .then(() => {
            chai
              .request(server)
              .get(`/adapters/${item}/models/person/objects`)
              .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.be.a("array");
                res.body.data[0].name.should.be.eql('Alice');
                done();
              });
          });
      });
    });
    describe("/POST Request", () => {
      it("should return data entered just now", done => {
        let record = {
          name: "Clark",
          birth_year: 1995
        };
        chai
          .request(server)
          .post(`/adapters/${item}/models/person/objects`)
          .send(record)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.data.should.have.property("name");
            res.body.data.should.have.property("birth_year");
            done();
          });
      });
    });
  });
});
