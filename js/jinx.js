if(typeof Jinx == 'undefined'){
  Jinx = {}
}

Jinx.init = function(options){
  var o = options;
  console.log('Init Jinx views')
  $('.view').each(function(){
    var viewId = $(this).attr('id');
    var viewName = $.camelize(viewId);
    var controllerName = $.camelize(viewId).replace('View', 'Controller');

    var view = o.scope[viewName];
    var controller = o.scope[controllerName];

    console.log('view',view);
    console.log('controller',controller);

    view._init({element: $('#'+viewId), controller: controller});
    controller._init({view: view});
  });
}

$.capitalize = function(value){
  return value.charAt(0).toUpperCase() + value.slice(1);
}

$.camelize = function(value){
  var camelized = "", c , p;
  for(var i=0;i<value.length;i++){
    c = value.charAt(i);
    if(p == '_' || i == 0)
      camelized += c.toUpperCase();     
    else if (c != '_')
      camelized += c;
    p = c;  
  }
  return camelized;
};