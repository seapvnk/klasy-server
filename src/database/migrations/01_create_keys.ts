import Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('keys', table => {
        table.increments('id').primary();
        table.string('password').notNullable();
        table.integer('quantity').notNullable();
        table.enu('type', [
            "Professor",
            "Estudante",
            "Administrador",
        ]).notNullable();
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('keys');
}