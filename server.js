const express = require("express")
const app = express()
const router = express.Router()
// const person = require("./person.json")
// const path = require("path")

app.use('/', router)


// Handle Error 
// if the user write other URL
app.use((req,res) => {
    res.status(404).send("Sorry! Can’t find that resource. Please check your URL")
})

router.get('/', (req,res) => {
    res.send("Welcome")
})

router.get("/about", (req, res) => {
    res.sendFile(__dirname + '/public/about.html')
})
router.get("/contact", (req, res) => {
    res.sendFile(__dirname + '/public/contact_us.html')
})

app.listen(3000,() => console.log("Server up to running"))