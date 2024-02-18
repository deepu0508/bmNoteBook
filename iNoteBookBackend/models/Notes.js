const mongoose = require("mongoose")
const { Schema } = mongoose;

const notesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    tag: {
        type: String,
        default: 'General'
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Notes', notesSchema);