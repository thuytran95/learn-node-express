const express = require("express")
const app = express() // same server = http.createServer

// call back function will invoke when everytime user request
app.get("/", (req, res) => {
	console.log('user hit the resource')
	res.status(200).send("Home page")
})

app.get('/about', (req, res) => {
	res.status(200).send("About page")
})

// user can do all multiple things on the server -> app.all to handle
// handle all http method: get, put, post,...
app.all("*", (req, res) => {
	res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, () => {
  console.log("server is listent to port 5000")
})

// app.get
// app.post
// app .put
// app.delete
// app.all
// app.use: reponsible for middleware
// app.listen
