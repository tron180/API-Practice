let Built = require("built.io");

// var Person = mongoose.model('Person', new mongoose.Schema({
// 	id: String,
// 	name: String,
// 	BirthYear: Number,
// 	age: Number,
// }));
return (
  Promise.resolve()
    // .then(() => {
    //     return ClassUsed.Class(class_used).Object(item).delete();
    // })
    // .then(object => {
    //     return object.map(item => {
    //       return item.uid;
    //     });
    //   })
    //   .then(uid => {
    //   try{
    // return uid.map(item => {
    //   return  Built.App("bltaa628f580f31b6ae").Class("person_1").Object("bltb5acb8c940c78391").delete();
    // });
    //     }
    //     catch(e){
    //         console.log(e)
    //     }
    // return Built.App("bltaa628f580f31b6ae").Class("person_1").Object("bltdf6038dd4781c457").delete();
    //     var Project = Built.App('bltaa628f580f31b6ae').Class('person_1').Object;

    //         // 'bltf4fsamplec851db' is uid of an object of 'project' class
    //         var project = Project('blt604bc22d1932c2c2');

    //         return project
    //         .delete()
    //   })
    //   .then( o=> {
    //         console.log(o)

    //       })
    // .then(() => {
    //   return Built.App("bltaa628f580f31b6ae")
    //     .Class("vehicle")
    //     .Object()
    //     .assign({
    //       name: "Maruti Xen",
    //       company_name: "Maruti",
    //       convertible: false
    //     })
    //     .save();
    // })
    // .then(() => {
    //   return Built.App("bltaa628f580f31b6ae")
    //     .Class("vehicle")
    //     .Object("blt2a97225b742d244d")
    //     .assign({name: "i20"})
    //     .save();
    // })
    .then(() => {
        return  Built.App("bltaa628f580f31b6ae").Class("vehicle").Object("blt2a97225b742d244d").delete();
    })
    .then(uid => {
      console.log("fff");
    })
    .catch(err => {
      console.log(err);
      return err;
    })
);
