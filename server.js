const { response, request } = require('express');
const express = require('express');
const app = express();
//importing mongoose 
const mongoose = require('mongoose');
// importing todoController
const todoController = require('./controllers/todoController');

app.use(express.json());
app.get('/',(request,response)=>{
    response.status(200).json({message:"Welcome to my API"})
});
  
app.post('/todo',todoController.addTodo);
app.get ('/todo',todoController.getAllTodo);
app.patch('/todo/:todoId',todoController.updateById);
app.delete('/todo/:todoId',todoController.deleteById);
app.get('/todo/:todoId',todoController.getTodoById);


// listening to request on localhost port 5010
app.listen(5010,() => {
    console.log("My server is Up and running ");
    // connecting to the database
    mongoose.connect('mongodb+srv://sammy0288:sammy0288@cluster0.68gyj.mongodb.net/todo_db?retryWrites=true&w=majority')
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        // console.log("DataBase not connect",error);
        console.log(`DataBase not connected ${error}`);
    });
});

