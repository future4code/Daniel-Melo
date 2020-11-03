import dotenv from 'dotenv'
import path from 'path'

dotenv.config();

module.exports = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    extension: 'ts',
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  }
}