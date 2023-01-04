const connectToMongo = require('./db');

const express = require('express')
connectToMongo();

const app = express()
const PORT = 5000;
app.use(express.json())

//Available Routes
app.use('/api/auth',require('./routes/auth'))

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})

