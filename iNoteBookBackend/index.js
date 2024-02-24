const connectToMongo = require('./db')
const cors = require('cors');
const express = require("express")


connectToMongo();

const app = express();
const port = 6700
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.setHeader('X-Foo', 'bar')
    res.send("Hello Deepu ")
})



app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => { console.log(`http://localhost:${port}`) })