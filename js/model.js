Jinx.Model = {
  parse_params: function(model, params){
    var post_data = {};
    for(var param in params){
      post_data[model + '[' + param + ']'] = params[param];
    };
    return post_data;
  },
  parse_json: function(model, data){
    return $.map(eval(data), function(datum){
      return datum[model];
    });
  }
};

Jinx.RestfulModel = {
  create: function(){
    
  },
  update: function(){

  },
  del: function(){

  },
  find: function(){

  },
  find_all: function(){

  }
}

Jinx.Model = $.extend(Jinx.Model, Jinx.RestfulModel)
