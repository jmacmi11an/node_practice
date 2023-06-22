const path = require('path');
const express = require('express');

// Good to remember
// console.log(__dirname) 

const app = express()

// Define paths for Express config
const viewPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)

// Setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Jonny Mac'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Jonny Mac'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: "This is a help page"
    })
})
// app.get('/help', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/help.html'))
// });


// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/about.html'))
// }) 

app.get('/weather', (req, res) => {
    res.send({
        location: "Boston",
        weather: "cold"
    })
})

app.listen(3001, () => {
    console.log('Server is up on port 3001')
})