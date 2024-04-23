//import express
const express = require ("express")

//create an app used to set up paths using express
const app = express()

//
const PORT = 3000


//set up a route or path
app.get('/Queen', (req, res) =>{
    res.send("Hii Queen")
})

app.post('/Queen', (req, res) =>{
    res.send("This is a post request")
})

app.put('/Queen', (req, res) =>{
    res.send("This is a put request")
})

app.patch('/Queen', (req, res) =>{
    res.send("This is a patch request")
})

app.delete('/Queen', (req, res) =>{
    res.send ("This is a delete request")
})
//telling app to listen for request
app.listen(PORT, () => {
    console.log("My App is working")
})