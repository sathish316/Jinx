if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.Todo = {
  name: 'todo',
  url: 'http://localhost:3000/todos.json',
  create: function(params, callback){
    var self = this;
    $.restPost({
      url: self.url,
      data: self.parse(self.name, params),
      success: function(data,status){
        callback();
      }
    });
  }
}