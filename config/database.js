module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      // settings: {
      //   client: 'sqlite',
      //   filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      // },
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
