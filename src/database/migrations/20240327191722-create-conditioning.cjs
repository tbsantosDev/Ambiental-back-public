'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('conditionings', {
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
    description: {
      allowNull: false,
      type: Sequelize.DataTypes.TEXT
    },
    term: {
      type: Sequelize.DataTypes.INTEGER
    },
    due_date: {
      type: Sequelize.DataTypes.DATE
    },
    comments: {
      type: Sequelize.DataTypes.TEXT
    },
    environmental_license_id: {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
      references: { model: 'environmental_licenses', key: 'id' },
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
    await queryInterface.dropTable('conditionings');
  }
};
