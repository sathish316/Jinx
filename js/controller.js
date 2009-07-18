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
}

Jinx.ModelActionWrapper.prototype.and = function(callback_action){
  var callback = this.controller.view[callback_action]
  this.modelAction(callback)
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