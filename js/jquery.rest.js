$.extend({
  restGet: function(o) {
    $.ajax($.extend({}, {type: 'GET'}, o))
  },

  restPost: function(o) {
    $.ajax($.extend({}, {type: 'POST'}, o))
  }

  //restPut: function(o) {
  //  o = $.extend({ representation: {} }, o||{});
  //
  //  return _restAjax($.extend({}, o, {
  //    type: 'PUT',
  //    data: o.representation
  //  }));
  //},
  //
  //restDelete: function(o) {
  //  return _restAjax($.extend({}, o||{}, {
  //    type: 'POST',
  //    data: { '_method' : 'DELETE' }
  //  }));
  //}
});