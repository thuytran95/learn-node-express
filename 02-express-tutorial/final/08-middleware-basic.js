const express = require('express')
const app = express()

//  req => middleware => res
//next is so important -> must have in middleware to direct to specific route
// middleware locates in the very top of all method to make sure all method can access it
const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
