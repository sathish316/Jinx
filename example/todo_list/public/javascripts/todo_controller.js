if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.TodoController = {
  model: Myapp.Todo,
  init: function(){

  },
  add: function(task){
    this.create({title: task})
        .and_flash('success','Todo created')// TODO move flash from view to controller
//        ._and('add_task', task)
//        .and('update_task_count')
  }
}
