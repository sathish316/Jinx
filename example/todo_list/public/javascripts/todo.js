if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.Todo = {
  name: 'todo',
  url: 'http://localhost:3000/todos.json',
  create: function(params, callback){
    var self = this;
    $.restPost({
      url: self.url,
      data: self.parse_params(self.name, params),
      success: function(data,status){
        callback();
      }
    });
  },
  find_all: function(callback){
    var self = this;
    $.restGet({
      url: self.url,
      success: function(data,status){
        callback(self.parse_json(self.name,data));
      }
    });
  }
}