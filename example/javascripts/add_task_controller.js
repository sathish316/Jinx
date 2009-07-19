if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.AddTaskController = {
  model: Myapp.Task,
  add: function(task){
    this.create({title: task})
        ._and('show_message','Task added')
        ._and('add_task', task)
        .and('update_task_count')
  }
}
