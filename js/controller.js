Jinx.Controller = {
  _init: function(options){
    var o = options;
    console.log('Init controller for ' + o.view.element.attr('id'));
    this.view = o.view;
  },
  init: function(){
    //implement this function in your controller for init callbacks  
  },
  view: undefined,
  model: undefined
}

Jinx.ModelActionWrapper = function(controller, modelAction){
  this.controller = controller;
  this.modelAction = modelAction;
  this.viewActions = [];//allows chaining multiple view actions using _and
}

Jinx.ModelActionWrapper.prototype._and = function(view_action, args){
  var self = this;
  this.viewActions.push(function(){
    self.controller.view[view_action](args);
  });
  console.log('view actions', this.viewActions);
  return this;
}

Jinx.ModelActionWrapper.prototype.and = function(view_action, args){
  var self = this;
  this.viewActions.push(function(){
    self.controller.view[view_action](args);
  });
  console.log('view actions', this.viewActions);
  this.modelAction(this.callback())
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
  create: function(){
    var self = this, args = arguments;
    return new Jinx.ModelActionWrapper(this, function(callback){
      self.model.create(args, callback);
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