module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'jokes',
      user:     'jeremy',
      password: '$ecret'
    }
  },
  live: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  },
  test: {
    client: 'postgresql',
    connection: {
      database: 'jokes-test',
      user:     'jeremy',
      password: '$ecret'
    }
  }
};
