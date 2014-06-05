var Connection = require('ssh2');

var c = new Connection();
c.on('connect', function() {
  console.log('Connection :: connect');
});
c.on('ready', function() {
  console.log('Connection :: ready');
  console.log(c)
  c.forwardIn('localhost', 1234, function(err) {
      if (err) throw err;
      console.log('Listening for connections on server on port 8000!');
    });
});
c.on('error', function(err) {
  console.log('Connection :: error :: ' + err);
});
c.on('end', function() {
  console.log('Connection :: end');
});
c.on('close', function(had_error) {
  console.log('Connection :: close');
});
c.connect({
  host: '${ssh host}',
  port: 22,
  username: '${username}',
  password : '${password}',
});

// example output:
// Connection :: connect
// Connection :: ready
// STDOUT:  17:41:15 up 22 days, 18:09,  1 user,  load average: 0.00, 0.01, 0.05
//
// Stream :: exit :: code: 0, signal: undefined
// Connection :: end
// Connection :: close