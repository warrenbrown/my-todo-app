//the task array with initial placeholders for added task
const task = ["buy socks", "practise with nodejs"];
//require express
const express = require('express');
//call express
const app = express();
//require body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');


//post route for adding new task
app.post('/addtask', function (req, res) {
    var newTask = req.body.newtask;
//add the new task from the post route into the array
    task.push(newTask);
//after adding to the array go back to the root route
    res.redirect("/");
});
//render the ejs and display added task, task(index.ejs) = task(array)
app.get("/", function(req, res) {
    res.render("index", { task: task, complete: complete});
});

//the compledted task array with initial placeholder for removed Task
const complete = [ 'finish jquerey'];

app.post('/removetask', function(req, res){
  var completeTask = req.body.check;

  //check for the type of the different complete task, then add into the complete Task
  if (typeof completeTask === 'string') {
    complete.push(completeTask);

    //check if complete task already exist in Task when checked then remove using the array splice method
    task.splice(task.indexOf(completeTask), 1);
  } else if (typeof completeTask === 'object') {
    for (var i = 0; i < completeTask.length; i++) {
      complete.push(completeTask[i]);
      task.splice(task.indexOf(completeTask[i]), 1);
    }
  }
    res.redirect('/');
});

//Server listing to port 3001
app.listen(3001, function () {
  console.log('Server is running on localhost:3001!  Cntrl C to terminate')
});
