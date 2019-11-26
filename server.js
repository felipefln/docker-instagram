const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const http = require('http')
const path = require('path')
const info = require('instagram-scraping')

const app = express()
const server = http.Server(app)

const routes = express.Router()

const response = info.scrapeUserPage('intertelecom.net.br').then(result => {
    console.dir(result.user)
})

routes.get('/', () => {
    return response
})

app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, 'uploads')))

app.use(routes)

server.listen(PORT, HOST || 3000);