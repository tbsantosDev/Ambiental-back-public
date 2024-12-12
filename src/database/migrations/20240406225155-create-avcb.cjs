'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('avcbs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.DataTypes.INTEGER
    },
    company: {
      allowNull: false,
      type: Sequelize.DataTypes.STRING
    },
    term: {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER
    },
    due_date: {
      allowNull: false,
      type: Sequelize.DataTypes.DATE
    },
    email: {
      allowNull: true,
      type: Sequelize.DataTypes.STRING
    },
    comments: {
      type: Sequelize.DataTypes.TEXT
    },
    company_id: {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
      references: { model: 'companies', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('avcbs');
  }
};