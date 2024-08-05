const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const subject = sequelize.define('Subject', {
    SUBID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    SUBCODE: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    SUBDESC: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CREATE_DATE: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    MODIFY_DATE: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    USECOUNTS: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ACTIVE: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'subjects',
    timestamps: false
});

module.exports = subject;