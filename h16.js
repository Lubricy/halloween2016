var fireMouseEvent = function (type, elem, centerX, centerY) {
  var evt = document.createEvent('MouseEvents');
  evt.initMouseEvent(type, true, true, window, 1, 1, 1, centerX, centerY, false, false, false, false, 0, elem);
  elem.dispatchEvent(evt);
};

var ox = 300;
var oy = 200;
function p(){
  var x = ox;
  var y = oy;
  fireMouseEvent('mousedown', c, x , y)
  for(var i = 0; i < 10; i++){
    x += 10;
    fireMouseEvent('mousemove',c ,x, y)
  }
  fireMouseEvent('mouseup', c, x + i, y)
}


function q(){
  var x = ox;
  var y = oy;
  fireMouseEvent('mousedown', c, x , y)
  for(var i = 0; i < 10; i++){
    y += 10;
    fireMouseEvent('mousemove',c ,x, y)
  }
  fireMouseEvent('mouseup', c, x + i, y)
}

function v(){
  var x = ox;
  var y = oy;
  fireMouseEvent('mousedown', c, x , y)
  for(var i = 0; i < 10; i++){
    x += 10;
    y += 10;
    fireMouseEvent('mousemove',c ,x, y)
  }
  for(var i = 0; i < 10; i++){
    x += 10;
    y -= 10;
    fireMouseEvent('mousemove',c ,x, y)
  }
  fireMouseEvent('mouseup', c, x + i, y)
}


function u(){
  var x = ox;
  var y = oy;
  fireMouseEvent('mousedown', c, x , y)
  for(var i = 0; i < 10; i++){
    x += 10;
    y -= 10;
    fireMouseEvent('mousemove',c ,x, y)
  }
  for(var i = 0; i < 10; i++){
    x += 10;
    y += 10;
    fireMouseEvent('mousemove',c ,x, y)
  }
  fireMouseEvent('mouseup', c, x + i, y)
}

function l(){
  var x = ox;
  var y = oy;
  fireMouseEvent('mousedown', c, x , y)
  for(var i = 0; i < 10; i++){
    x -= 10;
    y += 10;
    fireMouseEvent('mousemove',c ,x, y)
  }
  for(var i = 0; i < 10; i++){
    x += 10;
    fireMouseEvent('mousemove',c ,x, y)
  }
  for(var i = 0; i < 10; i++){
    x -= 10;
    y += 10;
    fireMouseEvent('mousemove',c ,x, y)
  }
  fireMouseEvent('mouseup', c, x + i, y)
}

function all(){
  p();q();v();u();l();
}

var count = 0
var timer = null
var fns = [p,q,v,u,l]
function start(){
  count = (count + 1) % 5
  fns[count]()
  t = setTimeout("start()",100);
}

function stop(){
  clearTimeout(t)
}
