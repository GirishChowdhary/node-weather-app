const path = require('path')
const express = require('express')
const hbs = require('hbs')
const goeWeather = require('./utils/weather.js')

const app = express();

//define paths for express config
const pubDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handelbars engine and views location
app.set('views', viewsPath);
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

//set static directory to serve
app.use(express.static(pubDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Girish'
    })
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            err: 'You must provide an address'
        })
    }
    goeWeather(req.query.address, (err, result) => {
        if (err) {
            return res.send({ err })
        }
        res.send({
            Temperature: result.current.temperature,
            Address: req.query.address
        })
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Girish'
    })
})

app.get('/index', (req, res) => {
    res.render('index', {
        title: 'About',
        name: 'Girish'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is help full',
        title: 'help',
        name: 'Girish'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Girish',
        errorMessage: 'Help Article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Girish',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server running at port 3000')
})