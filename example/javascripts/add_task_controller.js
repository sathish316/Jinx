if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.AddTaskController = {
  model: Myapp.Task,
  add: function(task){
    console.log('adding ' + task);
    this.create({title: task})
        ._and('show_message','Task added')
        ._and('add_task', task)
        .and('update_task_count')
  }
}

Myapp.AddTaskController = $.extend({}, Jinx.Controller, Myapp.AddTaskController);//TODO automate extends
