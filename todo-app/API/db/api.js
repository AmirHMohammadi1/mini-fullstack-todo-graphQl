const mongoose = require('mongoose');

const todo = new mongoose.Schema({
    todoId: {type:Number},
    todoTitle: {type: String},
    todoStart: {type: String},
    todoTime: {type: String},
    todoPr: {type: String}
},{
    timestamps: true,
});

const todoapi = mongoose.model('api1', todo)

// todoapi.createCollection();

module.exports = todoapi