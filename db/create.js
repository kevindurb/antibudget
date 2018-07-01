const path = require('path');
const debug = require('debug')('db:create');

require('dotenv').config({
  path: path.join(__dirname, '../.env'),
});

const files = require('./ddl/files.json');
const db = require('../src/db');
const fs = require('fs');


async function runSqls() {
  for (let index in files) {
    const file = files[index];

    debug(`running ${file}`);
    const sql = fs.readFileSync(
      path.join(__dirname, 'ddl', file),
      {encoding: 'utf-8'}
    );

    try {
      await db.raw(sql);
      debug('SUCCESS');
    } catch (e) {
      debug('ERROR', e);
    }
  }

  debug('DONE');
  process.exit();
}

debug('running all the sqls');
runSqls();
