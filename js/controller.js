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
