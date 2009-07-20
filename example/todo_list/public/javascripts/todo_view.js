if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.TodoView = {
  init: function(){
    this.on('.add-button').click('add','.task');
  },
  add_task: function(task){
    $('<li/>').text(task).prepend("<input type='checkbox' class='done'>").appendTo('#todo_items');
  },
  update_task_count: function(){
    $('.counter').text(Number($('.counter').text())+1);
  }
}