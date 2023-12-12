const express = require("express")
const app = express()
const port = 3000

const obj = { name: "Abdullah", work: "Alwayss" }

app.get('/', (req, res) => {
    res.set("Content-Type", "text/plain")
    res.status(200).send("Expresss with jss k")
})

app.get("/home", (req, res) => {
    res.set("Content-Type", "text/plain")
    res.status(200).send("Home Page New")
})

app.get("/about", (req, res) => {
    res.set("Content-Type", "text/plain")
    res.status(200).send("Abouts New")
})

app.get("/json", (req, res) => {
    res.set("Content-Type", "application/json")
    res.status(200).json({ name: "Abdullah", hobbies: ["Cricket", "Programming", "Coding", "Badminton"] })
})

app.get("/g", (req, res) => {
    res.set("Content-Type", "application/json")
    res.status(200).json(obj)
})

app.use((req, res) => {
    res.set("Content-Type", "text/plain")
    res.status(404).send("Page Not Found")
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})