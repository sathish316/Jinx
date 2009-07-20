if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.Todo = {
  resource: 'todo',

  base_url: 'http://localhost:3000/todos',

  format: 'json',

  url: function(){
    return this.base_url + '.' + this.format;
  },

  uri: function(){
    var self = this;
    return function(id) {
      return self.base_url + '/' + id + '.' + self.format;
    }
  },

  create: function(params, callback){
    var self = this;
    $.restPost({
      url: self.url(),
      data: self.parse_params(self.resource, params),
      success: function(data,status){},
      complete: function(xhr, status){
        callback({uri: xhr.getResponseHeader('location')});
      }
    });
  },

  find_all: function(callback){
    var self = this;
    $.restGet({
      url: self.url(),
      success: function(data,status){
        callback(self.parse_json(self.resource, data, self.uri()));
      }
    });
  },

  del: function(uri, callback){
    var self = this;
    $.restDelete({
      url: uri,
      success: function(){
        callback();
      }
    });
  }
}