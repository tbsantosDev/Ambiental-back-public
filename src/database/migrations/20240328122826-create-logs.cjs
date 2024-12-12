'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      action: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      resource: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      user_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      record_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      record_title: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      difference: {
        allowNull: true,
        type: Sequelize.DataTypes.JSONB
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
    await queryInterface.dropTable('logs')
  }
};
