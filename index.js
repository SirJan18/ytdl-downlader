const express = require('express')
const env = require('dotenv')
const bodyParser = require('body-parser')


//Define Local Variables
env.config()
const app = express()
app.use(express.static('public'))
app.use(express.static('views'))

//When get home
//TODO: respond with html page
app.get("/", (req, res) => {
    console.log('Request recieved')
    res.sendFile(__dirname+'/views/index.html')
})

app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));