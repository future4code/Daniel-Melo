const config = require('../knexfile')
import Knex from 'knex'

const knex = Knex(config)

export default knex;
