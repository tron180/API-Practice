console.log('Started....')
const express = require('express');
const Person = require("./Models/person");
const MongoAdapter = require('./Adapters/mongoAdapter');

const app = express();

const port = 3000;
let mongoAdapter = new MongoAdapter();

let p1 = new Person(mongoAdapter);

p1.delete();
p1.save({ name: "Alice", birth_year: 1995 }).then((obj) => {console.log(obj)});
p1.save({ name: "John", birth_year: 1995 }).then((obj) => {console.log(obj)});
p1.save({ name: "Clark", birth_year: 1996 }).then((obj) => {console.log(obj)});
let allData = p1.find();
app.listen(port)

app.get('/models/:model/objects', function(req, res){
    res.json({
        model: req.params.model,
        status: 'Wokring..!!',
        data: allData
    })
})