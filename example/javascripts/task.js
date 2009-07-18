if(typeof Myapp == 'undefined')
  Myapp = {}

Myapp.Task = {
  create: function(ostruct, callback){
    console.log('creating task ', ostruct, callback);
    window.setTimeout(callback, 3000);
  }
}