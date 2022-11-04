var Cylon = require('cylon');

Cylon.robot({
  connections: {
    server: { adaptor: 'mqtt', host: 'mqtt://localhost:1883' },
  },

  work: function (my) {
    my.server.on('message', function (topic, data) {
      console.log(topic + ': ' + data);
    });

    every((5).seconds(), function () {
      console.log('Saying hello from client A...');
      my.server.publish('hello', 'hi there A');
    });
  },
}).start();
