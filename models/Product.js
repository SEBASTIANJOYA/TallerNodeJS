'use strict'
const mongoose = require('mongoose')
const {Schema} = mongoose
const STOCK_MIN = 5

const proSchema = new Schema({
    idProduct:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    value:{
        type: Number,
        required: true
    },
    stock:{
        type:Number,
        required: true
    },
    dateExpired:{
        type: Date,
        required: true
    },
    typeProduct:{
        type: String,
        required: true
    }
})

proSchema.set('toJSON', {
    transform:(document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Product', proSchema)