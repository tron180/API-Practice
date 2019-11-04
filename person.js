class Person {
    constructor(adapter) {
        this.adapter = adapter;
    };
    
    save(object) {
        return new Promise((resolve, reject) => {
            if(object.name && object.BirthYear){
                resolve(this.adapter.save(object))
            }else{
                reject('Something is missing')
            }
        })
    }

    find(object){
        return this.adapter.find(object);
    }

    update(finder_object, changed_data_object){
        return this.adapter.update(finder_object, changed_data_object);
    }

    delete(deleting_object){
        return this.adapter.delete(deleting_object);
    }
}

module.exports =  Person