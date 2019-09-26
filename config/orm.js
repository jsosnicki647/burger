const connection = require("./connection.js")

const orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", (err, data) => {
            if (err) throw err
            cb(data)
        })
    },
    insertOne: function(val, cb) {
        let queryString = "INSERT INTO burgers(burger_name) VALUES (" + "'" + val + "'" + ")"
        connection.query(queryString, (err, data) => {
            if (err) throw err
            cb(data)
        })
    },
    updateOne: function(val, condition, cb) {
        connection.query("UPDATE burgers SET devoured = " + val + " WHERE " + condition, (err, data) => {
            if (err) throw err
            cb(data)
        })
    }
}

module.exports = orm