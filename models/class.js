const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Import the sequelize instance

const Class = sequelize.define('Class', {
    CID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    CCODE: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CDESC: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CREATE_DATE: {
        type: DataTypes.DATE,
        allowNull: false
    },
    MODIFY_DATE: {
        type: DataTypes.DATE,
        allowNull: false
    },
    USECOUNTS: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ACTIVE: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'classes', // Table name in the database
    timestamps: false // Assuming no automatic timestamps are needed
});

module.exports = Class;
