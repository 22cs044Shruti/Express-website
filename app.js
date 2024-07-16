const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/Views/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/Views/about.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/Views/contact.html')
})

app.get('/home/img', (req, res) => {
    res.sendFile(__dirname + '/img.jpg')
})



app.get('*', (req, res) => {
    res.send('404 Not Found')
})



app.get('/Cake', (req, res) => {
    res.send('Cake!')
})

app.get('/cake/ahmedabad', (req, res) => {
    res.send('Hello Ahmedabad cake!')
})

app.get('/cale/nadiad', (req, res) => {
    res.send('Hello Nadiad Cake!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})