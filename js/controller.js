Jinx.Controller = {
  _init: function(options){
    var o = options;
    console.log('Init controller for ' + o.view.element.attr('id'));
    this.view = o.view;
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
}

Jinx.ModelActionWrapper.prototype._and = function(view_action, args){
  var self = this;
  this.viewActions.push(function(){
    self.controller.view[view_action](args);
  });
  return this;
}

Jinx.ModelActionWrapper.prototype.and = function(view_action, args){
  this._and(view_action, args).end();
}

Jinx.ModelActionWrapper.prototype.end = function(){
  this.modelAction(this.callback());
}

Jinx.ModelActionWrapper.prototype._and_flash = function(level, msg){
  var self = this;
  this.viewActions.push(function(){
    self.controller.flash(level,msg);
  });
  return this;
}

Jinx.ModelActionWrapper.prototype.and_flash = function(level, msg){
  this._and_flash(level, msg).end();
}

Jinx.ModelActionWrapper.prototype.callback = function(){
  var self = this;
  return function(){
    $.each(self.viewActions, function(index,viewAction){
      viewAction();
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
  update: function(){
    this.model.update(arguments);
  },
  del: function(){
    this.model.del()
  },
  index: function(){
    this.model.index(arguments);
  },
  show: function(){
    this.model.show(arguments);    
  }
}

Jinx.Controller = $.extend(Jinx.Controller, Jinx.RestfulController)