const express = require("express")
const burger = require("../models/burger.js")
const router = express.Router()

router.get("/", (req, res) => {
    burger.all((data) => {
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject)
        res.render("index", hbsObject)
    })
})

router.post("/api/burgers", (req, res) => burger.create(req.body.name, (data) => res.json({id: data.insertID})))

router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id
    console.log("condition: " + condition)
    console.log(req.body.devoured)
    
    burger.update(req.body.devoured, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end()
        }
        else{
            res.status(200).end()
        }
    })
})

module.exports = router