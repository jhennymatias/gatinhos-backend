module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/db.sqlite3'
        },
        useNullAsDefault: true,
        migrations: {
            directory: './src/database/migrations'
        }
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        migrations: {
            tableName: 'knex_migrations'
        },
        useNullAsDefault: true,
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};