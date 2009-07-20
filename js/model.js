Jinx.Model = {
  parse: function(model, params){
    var post_data = {};
    for(var param in params){
      post_data[model + '[' + param + ']'] = params[param];
    };
    return post_data;
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
  list: function(){

  }
}

Jinx.Model = $.extend(Jinx.Model, Jinx.RestfulModel)
