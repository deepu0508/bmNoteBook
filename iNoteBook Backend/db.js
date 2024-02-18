const mongoose = require("mongoose")

const mongoURI = 'mongodb://127.0.0.1:27017/iNoteBook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.4'


const connectToMongo = () => {
    mongoose.connect(mongoURI, () => { console.log('Connect Sucessfully to MongoDB'); });
}

module.exports = connectToMongo;