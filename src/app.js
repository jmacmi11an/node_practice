const path = require('path');
const express = require('express');
const hbs = require('hbs', )

// Good to remember
// console.log(__dirname) 

const app = express()

// Define paths for Express config
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

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
        title: 'About',
        name: 'Jonny Mac'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Jonny Mac',
        message: "This is a help page"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: "Boston",
        weather: "cold"
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        message: 'Help article does not exist.',
        name: "Jonny Mac",
        title: "404"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        message: "You've found our 404 page. Try the links above to navigate back.",
        name: "Jonny Mac",
        title: "404"
    })
})

app.listen(3001, () => {
    console.log('Server is up on port 3001')
})