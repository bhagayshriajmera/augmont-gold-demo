const sample_data = require("./data").sample_data;

async function filter_fields(sparse_str) {
    var selected = sparse_str.split(",");

    let res = []
    sample_data.forEach(element => {
        let obj = {}
        for (const key in element) {
            if (selected.includes(key)) {
                obj[key] = element[key]
            }
        }
        if (obj) res.push(obj)
    });
    console.log(res)
    return res
}

async function sortByKey(array, key) {
    let res = await array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    console.log(res)
    return res
}


async function filter_records(filter_params) {
    let res = sample_data
    for (const key in filter_params) {
        console.log(key)
        if (typeof filter_params[key] == "object") {
            for (const oper in filter_params[key]) {
                if (oper == "gte") {
                    res = await res.filter((emp) => {
                        return emp[key] >= filter_params[key][oper]
                    })

                }
                if (oper == "lte") {
                    res = await res.filter((emp) => {
                        return emp[key] <= filter_params[key][oper]
                    })

                }
            }
        }
        else {
            res = await res.filter((emp) => {
                return emp[key] == filter_params[key]
            })
        }
    }
    return res
}


module.exports = {
    filter_records,
    sortByKey,
    filter_fields
}