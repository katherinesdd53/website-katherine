var sequelize;
 if (process.env.DATABASE_URL) {
 sequelize = new Sequelize(process.env.DATABASE_URL);
 } else {
 sequelize = new Sequelize(config.database, config.username, config.password, config);
 }

$( document ).ready(function() {
});