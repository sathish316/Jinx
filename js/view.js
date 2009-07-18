Jinx.View = {
  _init: function(options) {
    console.log(options);
    var o = options;
    console.log('Init view ' + o.element.attr('id'));
    this.element = o.element;
    this.controller = o.controller;
    this.init();
  },
  init: function() {
    //implement this function in your view for init callback    
  },
  on: function(selector) {
    return new Jinx.ViewActionWrapper(this, this.element.find(selector));
  },
  element: undefined,
  controller: undefined

}

Jinx.ViewActionWrapper = function(view, element) {
  this.view = view;
  this.element = element;
}

Jinx.ViewActionWrapper.prototype.click = function(event, element) {
  var self = this;
  this.element.click(function(){
    var value = self.view.element.find(element).val();
    self.view.controller[event](value);
  });
}