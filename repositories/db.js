import pg from 'pg';

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString:
      'postgres://urwipqsl:iDk8iskX7vS2BeAFdlOMrTAC8lS64tiF@babar.db.elephantsql.com/urwipqsl',
  });
  global.connection = pool;

  return pool.connect();
}

export { connect };
