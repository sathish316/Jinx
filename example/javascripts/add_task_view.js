if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.AddTaskView = {
  init: function(){
    this.on('.add-button').click('add','.task');
  },
  update_tasks: function(){
    console.log('updating tasks');
  }
}

Myapp.AddTaskView = $.extend({}, Jinx.View, Myapp.AddTaskView);//TODO automate extends
