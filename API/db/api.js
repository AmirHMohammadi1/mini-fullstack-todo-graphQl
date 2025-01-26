const mongoose = require('mongoose');

const api = new mongoose.Schema({
    todoId: {type:Number},
    todoTitle: {type: String},
    todoStart: {type: String},
    todoTime: {type: String},
    todoPr: {type: String}
},{
    timestamps: true,
});

const todoapi = mongoose.model('api1', api)

// todoapi.createCollection();

module.exports = todoapi