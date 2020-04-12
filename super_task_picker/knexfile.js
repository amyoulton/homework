module.exports = {
  development: {
    client: 'pg',

    connection: {
      database: 'task_picker'
    },
    migrations: {
      tablename: 'migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};
