if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.AddTaskView = {
  init: function(){
    this.on('.add-button').click('add','.task');
  }
}

Myapp.AddTaskView = $.extend({}, Jinx.View, Myapp.AddTaskView)
