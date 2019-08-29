const startServer = require('./src/server');
const { port } = require('./config');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:yS1XIXn8gYKIZrmK@food-delivery-server-sgjlw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => {
        
        console.log('Database connection successful')
    })
    .catch(err => {
        console.error('Database connection error')
    })

startServer(port);
