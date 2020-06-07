import Knex from 'knex';

// Realizar as alterações no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    })
}

// Voltar atrás
export async function down(knex: Knex) {
    return knex.schema.dropTable('items')
}