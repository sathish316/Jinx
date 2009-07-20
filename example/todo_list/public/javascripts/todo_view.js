if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.TodoView = {
  init: function(){
    this.on('.add-button').click('add','.task');
  },
  add_todo: function(task){
    $('#todo_items').append(
      $('<div/>').append("<input type='checkbox' class='done'>").append(task)
    );
  },
  render_todo_items: function(todos){
    var self = this;
    $.each(todos, function(i,todo){
      self.add_todo(todo.title);
    })
  },
  update_task_count: function(){
    $('.counter').text(Number($('.counter').text())+1);
  }
}