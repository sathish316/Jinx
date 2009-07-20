Jinx.Controller = {
  _init: function(options){
    var o = options;
    console.log('Init controller for ' + o.view.element.attr('id'));
    this.view = o.view;
    this.init();
  },
  init: function(){
    //implement this function in your controller for init callbacks  
  },
  flash: function(level, msg){
    this.view.element.find('.flash')
        .removeClass('notice')
        .removeClass('success')
        .removeClass('error')
        .addClass(level)
        .text(msg);
  },
  view: undefined,
  model: undefined
}

//wraps model action and provides callback that executes one or more actions on the view
Jinx.ModelActionWrapper = function(controller, modelAction){
  this.controller = controller;
  this.modelAction = modelAction;
  this.viewActions = [];
  this.renderActions = [];
}

//delays view action execution with args + callback data
Jinx.ModelActionWrapper.prototype._and = function(view_action, args){
  var self = this;
  this.viewActions.push(function(data){
    if(args)
      self.controller.view[view_action](args, data); //TODO handle if no args
    else
      self.controller.view[view_action](data);
  });
  return this;
}

//delays view action execution with args + callback data and calls end
Jinx.ModelActionWrapper.prototype.and = function(view_action, args){
  this._and(view_action, args).end();
}

//delays view render action execution with callback data
Jinx.ModelActionWrapper.prototype._and_render = function(render_action){
  var self = this;
  this.renderActions.push(function(data){
    self.controller.view['render_' + render_action](data);
  });
  return this;
}

//delays view render action execution with callback data and calls end
Jinx.ModelActionWrapper.prototype.and_render = function(render_action){
  this._and_render(render_action).end();
}

//executes model action passing the aggregate of view actions as callback
Jinx.ModelActionWrapper.prototype.end = function(){
  this.modelAction(this.callback());
}

//delays flash action
Jinx.ModelActionWrapper.prototype._and_flash = function(level, msg){
  var self = this;
  this.viewActions.push(function(){
    self.controller.flash(level,msg);
  });
  return this;
}

//delays flash action and executes model action
Jinx.ModelActionWrapper.prototype.and_flash = function(level, msg){
  this._and_flash(level, msg).end();
}

//creates callback fn by aggregating view actions and render actions
Jinx.ModelActionWrapper.prototype.callback = function(){  
  var self = this;
  return function(data){
    $.each(self.viewActions, function(index,viewAction){
      viewAction(data);
    });
    $.each(self.renderActions, function(index,renderAction){
      renderAction(data);
    });
  };
}

Jinx.RestfulController = {
  create: function(params){
    var self = this;
    return new Jinx.ModelActionWrapper(this, function(callback){
      self.model.create(params, callback);
    });
  },
  update: function(uri, params){
    var self = this;
    return new Jinx.ModelActionWrapper(this, function(callback){
      self.model.update(uri, params, callback);
    });
  },
  del: function(uri){
    var self = this;
    return new Jinx.ModelActionWrapper(this, function(callback){
      self.model.del(uri, callback);
    });
  },
  get_all: function(){
    var self = this;
    return new Jinx.ModelActionWrapper(this, function(callback){
      self.model.find_all(callback);
    });
  },
  show: function(){
    this.model.show(arguments);    
  }
}

Jinx.Controller = $.extend(Jinx.Controller, Jinx.RestfulController)