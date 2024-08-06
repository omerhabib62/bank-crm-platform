import { configuration } from 'config';
import { Client } from 'pg';

const createDatabase = async () => {
  const client = new Client({
    user: configuration.DB_USER,
    host: configuration.DB_HOST,
    password: configuration.DB_PASSWORD,
    port: configuration.DB_PORT,
  });

  try {
    await client.connect();
    await client.query(`CREATE DATABASE "${configuration.DB_NAME}"`);
    console.log(`Database ${configuration.DB_NAME} created successfully`);
  } catch (error) {
    console.error(`Error creating database: ${error}`);
  } finally {
    await client.end();
  }
};

createDatabase();
