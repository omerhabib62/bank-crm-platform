import { Client } from 'pg';
import { databaseConfig } from '../config/typeorm.config';

const createDatabase = async () => {
  const client = new Client({
    user: databaseConfig.user,
    host: databaseConfig.host,
    password: databaseConfig.password,
    port: databaseConfig.port,
  });

  try {
    await client.connect();

    const dbName = databaseConfig.database;
    const res = await client.query(`SELECT 1 FROM pg_database WHERE datname=$1`, [dbName]);

    if (res.rowCount === 0) {
      await client.query(`CREATE DATABASE "${dbName}"`);
      console.log(`Database ${dbName} created successfully.`);
    } else {
      console.log(`Database ${dbName} already exists.`);
    }
  } catch (err) {
    console.error('Error creating database:', err);
  } finally {
    await client.end();
  }
};

createDatabase();
