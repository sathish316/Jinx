if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.AddTaskView = {
  init: function(){
    this.on('.add-button').click('add','.task');
  },
  add_task: function(task){
    $('<li/>').text(task).prepend("<input type='checkbox' class='done'>").appendTo('#todo_items');
  },
  update_task_count: function(){
    $('.counter').text(Number($('.counter').text())+1);
  },
  show_message: function(msg){
    this.flash('success', msg);
  }
}

Myapp.AddTaskView = $.extend({}, Jinx.View, Myapp.AddTaskView);//TODO automate extends
