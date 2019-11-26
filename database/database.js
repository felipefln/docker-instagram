module.exports = {
    dialect: 'postgres',
    host: '0.0.0.0',
    username: 'postgres',
    password: 'postgres',
    database: 'postgresdb',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};