if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.AddTaskController = {
  model: Myapp.Task,
  add: function(task){
    console.log('adding ' + task);
    this.create({title: task}).and('update_tasks')
  }
}

Myapp.AddTaskController = $.extend({}, Jinx.Controller, Myapp.AddTaskController);//TODO automate extends
