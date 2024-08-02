const { Sequelize } = require('sequelize');

// Set up the Sequelize instance with your database credentials
const sequelize = new Sequelize('coaching_database', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

// Test the connection
sequelize.authenticate().then(() => {
    console.log('Database Connected...');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
})

module.exports = sequelize;