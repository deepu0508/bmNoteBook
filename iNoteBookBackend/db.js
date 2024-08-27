const mongoose = require("mongoose")

// const mongoURI = 'mongodb://127.0.0.1:27017/iNoteBook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.4'
// For Deploy
const mongoURI = 'mongodb+srv://shivmondal0132:Deepu098@@blogworld.iqsgz.mongodb.net/bmNoteBook?retryWrites=true&w=majority&appName=blogWorld'


const connectToMongo = () => {
    mongoose.connect(mongoURI, () => { console.log('Connect Sucessfully to MongoDB'); });
}

module.exports = connectToMongo;