const sample_data = require("./data").sample_data;
let utils = require("./utils");

class RecordOperations {
    filter_data(filter_params) {
        return new Promise((resolve, reject) => {
            let res = utils.filter_records(filter_params)
            console.log(res)
            resolve(res)
        });
    }
    
    
    sort_data(sort_string) {
        console.log("In sort data")
        console.log(sort_string)
    
        return new Promise((resolve, reject) => {
            let res = utils.sortByKey(sample_data, sort_string)
            console.log(res)
            resolve(res)
        });
    }
    
    sparse_data(sparse_str) {
    
        console.log("In sparse data" + sparse_str.toString())
        console.log(sparse_str)
    
        return new Promise((resolve, reject) => {
            let res = utils.filter_fields(sparse_str)
            console.log(res)
            resolve(res)
        });
    }
}



module.exports = {
    RecordOperations
}