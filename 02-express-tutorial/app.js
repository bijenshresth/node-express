// const { urlencoded } = require('express')
const express = require('express')
const app = express()

let {people} = require('./data')

// static assets

app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({extended: false}))

// parse from json
app.use(express.json())
app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req, res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: "Please provide the name."})
    }
    res.status(201).json({success: true, person: name})
})

app.post('/login', (req, res) => {
    const {name} = req.body
    if(name) {
        res.send(`Welcome ${name}`)
    }
    else{
        res.status(404).send("Unable to Post.")
    }
    
})

app.listen(5000, () => {
    console.log("Listening to port 5000....")
})

