if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.TodoView = {
  init: function(){
    this.when('.add-button').is_clicked('add','.task');
  },

  bindTodoItems: function(){
    this.when('.todo_item','.delete').is_clicked('destroy').it();
  },

  add: function(task, data){
    this.render_todo_item({uri: data.uri, title: task})
    this.bindTodoItems();
  },

  render_todo_item: function(todo){
    $('#todo_items').append(
      $('<div/>').addClass('todo_item')
                  .attr('uri', todo.uri)
                  .append("<input type='button' class='delete' value='X'>")
                  .append("<input type='checkbox' class='done'>")
                  .append($('<span/>').text(todo.title))
    );
  },

  render_todo_items: function(todos){
    var self = this;
    $.each(todos, function(i,todo){
      self.render_todo_item(todo);
    });
    this.bindTodoItems();
  },

  remove: function(uri){
    this.element.find('*[uri='+uri+']').remove();
  }
}