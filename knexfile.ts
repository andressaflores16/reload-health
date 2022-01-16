import dotenv from 'dotenv';
dotenv.config();

const dbInfo = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  migrations: {
    directory: './database/migrations',
    extension: 'ts'
  },
  seeds: {
    directory: './database/seeds',
    extension: 'ts'
  }
};

const knexConfig = {
  development: dbInfo,
  staging: dbInfo,
  production: dbInfo,
};

export default knexConfig;
