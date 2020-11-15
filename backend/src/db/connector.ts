import { Sequelize } from 'sequelize'

import config from '../config'
const {
  db: {
    user,
    url,
    database,
    password,
    port,
  }
} = config

console.log('config', config)

const sequelize = new Sequelize(database, null, null, {
  dialect: 'postgres',
  host: url,
  username: user,
  password,
  port: Number(port),
})
sequelize.authenticate().then(() => {
  console.log('Database connection has been established successfully.')
}).catch((err) => {
  console.error('Unable to connect to the database:', err)
  process.exit(-1)
})

export default sequelize