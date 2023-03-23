const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    host: process.env.SERVER_HOSTNAME || 'localhost',
    port: process.env.SERVER_PORT || 8080,
    routes: {
      cors: {
        origin: ['http://notesapp-v1.dicodingacademy.com'],
      },
    },
  });

  server.route(routes);

  await server.start();

  console.log(`Server berjalan di ${server.info.uri}`);
};

init();
