import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

console.log(`Loading ${process.env.NODE_ENV} environment`);

const configuration = {
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  PORT: parseInt(process.env.PORT, 10),
  BASE_URL: process.env.BASE_URL,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: parseInt(process.env.DB_PORT, 10),
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_TYPE: process.env.DB_TYPE,
  API_VERSION_ROUTE: process.env.API_VERSION_ROUTE,
  API_VERSION: process.env.API_VERSION,
  API_NAME: process.env.API_NAME,
  API_DESCRIPTION: process.env.API_DESCRIPTION,
};

// console.log('Database Configuration:', configuration);

export { configuration };
