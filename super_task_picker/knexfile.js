module.exports = {
  development: {
    client: 'pg',

    connection: {
      database: 'team_picker'
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
