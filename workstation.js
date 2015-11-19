var net = require('net');
var json = function (obj) {
  return JSON.stringify(obj, 0, 2);
};
var message = json({foo: "bar"});

var s = new net.Socket();
s.connect(1715, 'localhost');
console.log('connected');

s.write(message);
console.log('wrote message');

console.log('All done!');
s.end();
