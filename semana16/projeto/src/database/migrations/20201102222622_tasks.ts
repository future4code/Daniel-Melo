import Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.date('limit_date').notNullable()
    table.string('status').notNullable()
    table.integer('author').unsigned().notNullable()
    
    table.foreign('author').references('id').inTable('users')
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tasks')
}

