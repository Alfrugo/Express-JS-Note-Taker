const router = require('express').Router()
const fs = require ('fs')
let database = require('../db/db.json')

router.get('/notes',(req,res) => {
    database = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8',))
    res.json(database)
})
router.post('/notes',(req,res) =>{
    let newNote = {
        title: req.body.title, 
        text: req.body.text,
        id: Math.floor(Math.random()*10000)
    }
database.push(newNote)
fs.writeFileSync('./db/db.json', JSON.stringify(database))
res.json(database)
})




module.exports = router