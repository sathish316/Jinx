Jinx.Model = {
  format: 'json',

  resource: undefined, //name of the resource

  base_url: undefined, // base url of the resource

  url: function(){
    return this.base_url + '.' + this.format;
  },

  uri: function(){
    var self = this;
    return function(id) {
      return self.base_url + '/' + id + (self.format ? '.' + self.format : '');
    }
  },

  create: function(params, callback){
    var self = this;
    callback = callback || function(){};
    $.restPost({
      url: self.url(),
      data: self._parse_params(self.resource, params),
      success: function(data,status){},
      complete: function(xhr, status){
        callback({uri: xhr.getResponseHeader('location')});
      }
    });
  },

  find_all: function(callback){
    var self = this;
    callback = callback || function(){};
    $.restGet({
      url: self.url(),
      success: function(data,status){
        callback(self._parse_json(self.resource, data, self.uri()));
      }
    });
  },

  update: function(uri, params, callback){
    var self = this;
    callback = callback || function(){};
    $.restPut({
      url: uri,
      data: self._parse_params(self.resource, params),
      success: function(){
        callback();
      }
    });
  },

  del: function(uri, callback){
    var self = this;
    callback = callback || function(){};
    $.restDelete({
      url: uri,
      success: function(){
        callback();
      }
    });
  },

  _parse_params: function(model, params){
    var post_data = {};
    for(var param in params){
      post_data[model + '[' + param + ']'] = params[param];
    };
    return post_data;
  },

  _parse_json: function(model, data, to_uri){
    return $.map(eval(data), function(datum){
      return $.extend(datum[model], {uri: to_uri(datum[model].id)});
    });
  }
};