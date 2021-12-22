var helper = require("./helper")

let rec_op = new helper.RecordOperations()
const PORT =1000

const express = require("express")
let app = express()


// Filter examples = 
// http://localhost:1000/compensation_data?salary[gte]=120000
// http://localhost:1000/compensation_data?salary[gte]=120000&zip_code=11201
// http://localhost:1000/compensation_data?zip_code=11201


// Sort examples = 
// http://localhost:1000/compensation_data?sort=zip_code
// http://localhost:1000/compensation_data?sort=first_name
// http://localhost:1000/compensation_data?sort=last_name


// SParse examples = 
// http://localhost:1000/compensation_data?fields=first_name,last_name,salary
// http://localhost:1000/compensation_data?fields=first_name,last_name
// http://localhost:1000/compensation_data?fields=first_name,zip_code
// http://localhost:1000/compensation_data?fields=zip_code

app.get("/compensation_data", (req, res) => {
    if (req.query.sort)
        rec_op.sort_data(req.query.sort).then((data) => {
            res.send(data)
        })
    else if (req.query.fields) {
        rec_op.sparse_data(req.query.fields).then((data) => {
            res.send(data)
        })
    }

    else rec_op.filter_data(req.query).then((data) => {
        res.send(data)
    })

})

app.listen(PORT, ()=>{
    console.log(`Server is started on port  ${PORT}`)
})