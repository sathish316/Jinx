Jinx.View = {
  _init: function(options) {
    var o = options;
    console.log('Init view ' + o.element.attr('id'));
    this.element = o.element;
    this.controller = o.controller;
    this.init();
  },

  init: function() {
    //implement this function in your view for init callback    
  },

  when: function(sel,child_sel){
    return new Jinx.ViewActionWrapper(this, sel, child_sel);
  },

  element: undefined,
  controller: undefined

}

Jinx.ViewActionWrapper = function(view, sel, child_sel) {
  this.view = view;
  this.sel = sel;
  var selector = child_sel ? sel + ' ' + child_sel : sel;
  this.elements = this.view.element.find(selector);
}

Jinx.ViewActionWrapper.prototype.is_clicked = function(controller_action, data_selector) {
  var self = this;
  this.elements.each(function(index){
    var e = this;
    $(this).unbind('click').click(function(){
      //console.log(e,'clicked');
      var value = data_selector ? self.view.element.find(data_selector).val() :
        (self.params ? self.params : self.view.element.find(self.sel).eq(index).attr('uri'));

      self.view.controller[controller_action](value);
    })
  });
  return this;
}

Jinx.ViewActionWrapper.prototype.is_toggled = function(controller_action) {
  var self = this;
  this.elements.each(function(index){
    var e = this;
    $(this).unbind('change').change(function(){
      var uri = self.view.element.find(self.sel).eq(index).attr('uri');
      self.view.controller[controller_action](uri, this.checked);
    })
  });
  return this;
}

Jinx.ViewActionWrapper.prototype.it = function(params){
//  if(params)
//    this.params = params;
  return this;
}

