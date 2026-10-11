export default {
  server: {
    port: 5173,
    host: true,
    proxy: {
      "/api": "http://haproxy",
    },
  },
};
