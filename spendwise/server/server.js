const express = require('express')
const cors = require('cors');
const db = require('./config/connection');
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 3001;

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api', require('./routes/' + route)))

const server = () => {
    db.once('open', () => {
        app.listen(PORT, () => {
          console.log(`API server running on port ${PORT}!`);
        });
      });
}

server()

//TODO