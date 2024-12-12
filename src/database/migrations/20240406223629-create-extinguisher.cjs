'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('extinguishers', {
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
    exchange_date: {
      allowNull: false,
      type: Sequelize.DataTypes.DATE
    },
    due_date: {
      allowNull: false,
      type: Sequelize.DataTypes.DATE
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
    await queryInterface.dropTable('extinguishers');
  }
};