/**
 * @type {({path: string}) => import('vite').Plugin}
 */
export const refreshPlugin = ({ path }) => ({
  name: "configure-server",
  configureServer(server) {
    server.middlewares.use(path, (req, res, next) => {
      server.hot.send({
        type: "full-reload",
      });
      res.statusCode = 204;
      res.end("");
    });
  },
});
