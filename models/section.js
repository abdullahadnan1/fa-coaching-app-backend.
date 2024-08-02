const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Section = sequelize.define('Section', {
    SECID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    SECCODE: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    SECDESC: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    CREATE_DATE: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    MODIFY_DATE: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    USECOUNTS: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    ACTIVE: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
}, {
   tableName: 'sections',
   timestamps: false,
}); 

module.exports = Section;