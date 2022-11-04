var Cylon = require('cylon');

Cylon.robot({
  connections: {
    server: { adaptor: 'mqtt', host: 'mqtt://localhost:1883' },
  },

  work: function (my) {
    my.server.subscribe('hello');

    my.server.on('message', function (topic, data) {
      console.log('mensaje recibido');
      console.log(topic + ': ' + data);
    });
  },
}).start();
