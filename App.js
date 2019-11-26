// Packages
const express = require("express");

// Adapters
const ArrayAdapter = require("./Adapters/arrayApdapter");
const MongoAdapter = require("./Adapters/mongoAdapter");
const FileAdapter = require("./Adapters/fileAdapter");
const BuiltAdapter = require("./Adapters/builtIOAdapter");

// Models
const Person = require("./Models/person");
const Vehicle = require("./Models/vehicle");

const app = express();

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 3000;

const mongoAdapter = new MongoAdapter();
const builtAdapter = new BuiltAdapter();
const arrayAdapter = new ArrayAdapter();
const fileAdapter = new FileAdapter();

// Get Adapter
const getAdapter = adapter => {
  return Promise.resolve().then(() => {
    if (adapter.toLowerCase() == "mongo") {
      return mongoAdapter;
    } else if (adapter.toLowerCase() == "builtio") {
      return builtAdapter;
    } else if (adapter.toLowerCase() == "array") {
      return arrayAdapter;
    } else if (adapter.toLowerCase() == "file") {
      return fileAdapter;
    } else {
      throw "Adapter not found..!!";
    }
  });
};

// Get Model
const getModelInstance = (modelName, adapter) => {
  return Promise.resolve().then(() => {
    if (modelName.toLowerCase() == "person") {
      return new Person(adapter);
    } else if (modelName.toLowerCase() == "vehicle") {
      return new Vehicle(adapter);
    } else {
      throw "Model Not Found.";
    }
  });
};

// GET Request
app.get("/adapters/:adapter/models/:model/objects", function(req, res) {
  return getAdapter(req.params.adapter)
    .then(adapter => {
      return getModelInstance(req.params.model, adapter);
    })
    .then(instance => {
      return instance.find();
    })
    .then(obj => {
      return res.json({
        adapter: req.params.adapter,
        model: req.params.model,
        status: "Workingg..!!",
        data: obj
      });
    })
    .catch(err => {
      return res.status(404).send(err);
    });
});

// POST Request
app.post("/adapters/:adapter/models/:model/objects", function(req, res) {
  return getAdapter(req.params.adapter)
    .then(adapter => {
      return getModelInstance(req.params.model, adapter);
    })
    .then(instance => {
      return instance.save(req.body);
    })
    .then(obj => {
      console.log("Given object saved successfully..!!");
      return res.json({
        adapter: req.params.adapter,
        model: req.params.model,
        status: "Workingg..!!",
        data: obj
      });
    })
    .catch(err => {
      return res.status(404).send(err);
    });
});

// PUT Request
app.put("/adapters/:adapter/models/:model/objects/:id", function(req, res) {
  return getAdapter(req.params.adapter)
    .then(adapter => {
      return getModelInstance(req.params.model, adapter);
    })
    .then(instance => {
      console.log("Searching the id ", req.params.id)
      var filter = {id: req.params.id}
      return instance.update(filter, req.body);
    })
    .then(obj => {
      console.log("Given object updated successfully..!!");
      return res.json({
        adapter: req.params.adapter,
        model: req.params.model,
        status: "Workingg..!!",
        data: obj
      });
    })
    .catch(err => {
      return res.status(404).send(err);
    });
});

// DELETE Request
app.delete("/adapters/:adapter/models/:model/objects/:id", function(req, res) {
  return getAdapter(req.params.adapter)
    .then(adapter => {
      return getModelInstance(req.params.model, adapter);
    })
    .then(instance => {
      console.log("Searching the id ", req.params.id)
      var filter = {id: req.params.id}
      return instance.delete(filter);
    })
    .then(obj => {
      console.log("Given object deleted successfully..!!");
      return res.json({
        adapter: req.params.adapter,
        model: req.params.model,
        status: "Workingg..!!",
        data: obj
      });
    })
    .catch(err => {
      return res.status(404).send(err);
    });
});

app.listen(port, () => {
  console.log("Server is listening on port 3000");
});
