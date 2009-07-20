$.extend({
  restGet: function(o) {
    $.ajax($.extend({}, {type: 'GET'}, o))
  },

  restPost: function(o) {
    $.ajax($.extend({}, {type: 'POST'}, o))
  },

  restDelete: function(o) {
    $.ajax($.extend({}, {type: 'DELETE'}, o))
  },

  restPut: function(o) {
    $.ajax($.extend({}, {type: 'PUT'}, o))
  }
});