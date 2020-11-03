import Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users_tasks', table => {
    table.integer('user_id').unsigned().notNullable()
    table.integer('task_id').unsigned().notNullable()
    
    table.foreign('user_id').references('id').inTable('users')
    table.foreign('task_id').references('id').inTable('tasks')
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users_tasks')
}

