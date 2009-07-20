if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.TodoController = {
  model: Myapp.Todo,
  init: function(){
    this.get_all().and_render('todo_items');
  },

  add: function(task){
    this.create({title: task})._and_flash('success','Todo created')
                              .and('add',task);
  },
  
  destroy: function(uri){
    this.del(uri)._and_flash('success','Todo deleted')
                 .and('remove',uri);
  }
}
