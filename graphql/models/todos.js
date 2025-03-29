const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2')
const Schema = mongoose.Schema;

const api = Schema({
    todoId: {type:Number},
    todoTitle: {type: String},
    todoStart: {type: String},
    todoTime: {type: String},
    todoPr: {type: String}
},{
    timestamps: true,
});

api.plugin(paginate)
const todoModel = mongoose.model('api1' , api);

module.exports = todoModel;