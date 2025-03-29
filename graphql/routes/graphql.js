const router = require('express').Router();
const {
  graphql,
  buildSchema,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require("graphql");
const todoModel = require('../models/todos');
const { createHandler } = require('graphql-http/lib/use/express');
const bcrypt = require('bcryptjs')

// ? three models of create Schema
// # ONE
// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'Query',
//     fields: {
//       hello: { type: GraphQLString },
//       user: { type: new GraphQLObjectType({
//         name: 'user',
//         fields:{
//           id: {type: GraphQLInt},
//           name: {type: GraphQLString}
//         }
//       })},
//     },
//   }),
// });
// # three (with resolve in schema)
// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'Query',
//     fields: {
//       hello: { type: GraphQLString,
//                resolve: ()=> "hello"},
//       user: { type: new GraphQLObjectType({
//         name: 'user',
//         fields:{
//           id: {type: GraphQLInt,
//                resolve: ()=> 1
//           },
//           name: {type: GraphQLString,
//                  resolve: ()=> "amir"
//           }
//         }
//       })},
//     },
//   }),
// });
// # TWO
const schema = buildSchema(`
    type Query {
      user: user
      todos(page: Int , limit: Int): todosPaginate
      todo(id: Int!): [todo]
      hello: String
    }
    
    type todosPaginate {
      todo: [todo]
      paginate: paginate
    }
    
    type paginate {
      total: Int
      limit: Int
      page: Int
      pages: Int
    }
    
    type todo {
      todoId: Int!
      todoTitle: String!
      todoStart: String!
      todoTime: String!
      todoPr: String! @deprecated(reason : "not use this")
    }

    type user {
      id: Int
      name: String
      gender: Gender
    }

    enum Gender {
      male
      femail
    }

    type Mutation {
      createTodo(input: inputTodo!) : todo!
    }

    input inputTodo {
      todoId: Int!
      todoTitle: String!
      todoStart: String!
      todoTime: String!
      todoPr: String!
    }
`);

// The rootValue provides a resolver function for each API endpoint
const resolver = {
  user() {
    return {
      id: 1,
      name: "amir",
      gender: "male"
    };
  },
  async todos(args) {
    const page = args.page || 1
    const limit = args.limit || 2
    // ? without npm package
    // const todos = await todoModel.find().skip((page - 1) * limit).limit(limit)
    // ? with package
    const todos = await todoModel.paginate({}, {page, limit})
    // console.log(todos.totalDocs)
    return {
      todo: todos.docs,
      paginate: {
        total: todos.totalDocs,
        limit: todos.limit,
        page: todos.page,
        pages: todos.totalPages,
      }
    }
  },
  async todo(args) {
    const todo = await todoModel.find({todoId : args.id})
    // ? تست چک کردن پسورد که هش شده فقط رکورد 6
    // const todoPrcrypt = todo.at(0).todoPr
    // const todoPr = bcrypt.compareSync("سلام تست عزیزم", todoPrcrypt)
    // console.log(todoPr)
    return todo
  },
  hello() {
    return "hello";
  },

  async createTodo(args) {
    // console.log(args.input)
    const hash = bcrypt.hashSync(args.input.todoPr , 15)
    const todo = await new todoModel ({
      todoId: args.input.todoId,
      todoTitle: args.input.todoTitle,
      todoStart: args.input.todoStart,
      todoTime: args.input.todoTime,
      todoPr: hash
    })
    todo.save()
    return todo
  }
};

// GET home
// router.get("/", function (req, res, next) {
//   graphql({
//     schema,
//     source: "{ hello user{name} }",
//     rootValue: resolver,
//   }).then((response) => {
//     // console.log(response);
//     const title = response.data.user.name;
//     const hello = response.data.hello;
//     res.render("index", { title, hello });
//   });
// });

// router.get('/all', async(req , res , next) => {
//   const todos = await todoModel.find()
//   const todoId = []
//   const todoTitle = []
//   for (let i = 0; i < todos.length; i++) {
//     todoId.push(todos.at(i).todoId)
//     todoTitle.push(todos.at(i).todoTitle)
//   }

//   // console.log(todoTitle)
//   res.send(todoTitle)
// })

router.all('/', createHandler({
  schema: schema,
  rootValue: resolver
}))

module.exports = router;