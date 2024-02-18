const connectToMongo = require('./db')

const express = require("express")
const app = express();
const port = 6700
connectToMongo();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello Deepu ")
})

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port,()=>{console.log(`http://localhost:${port}`)})