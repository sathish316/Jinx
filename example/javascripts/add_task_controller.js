if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.AddTaskController = {
  model: Myapp.Task,
  add: function(task){
    console.log('adding task '+task);
  }
}

Myapp.AddTaskController = $.extend({}, Jinx.Controller, Myapp.AddTaskController)
