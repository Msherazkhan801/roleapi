const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.' + process.env.MONGO_URL)
    } else {
        console.log('Error in DB connection : ' + err.stack)
    }
});

module.exports =
    {
        url: mongoose.connection
    }


