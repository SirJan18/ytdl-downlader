const express = require('express')
const env = require('dotenv')
const bodyParser = require('body-parser')
const { EventEmitter } = require('events')


//Define Local Variables
env.config()
const emitter = new EventEmitter()
const app = express()
app.use(express.static('public'))
app.use(express.static('views'))

//When get home
//TODO: respond with html page
app.get("/", (req, res) => {
    console.log('Request recieved')
    res.sendFile(__dirname+'/views/index.html')
    test.addEventLister('click', function(){
        console.log('Clicked the button');
    })
})

app.get("/download", (req, res) => {
    console.log('The button has been pressed')
    res.sendStatus(200)
})

app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));