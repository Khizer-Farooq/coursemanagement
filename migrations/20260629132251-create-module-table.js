'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('modules', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      module_name: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      course_id: {
        type: Sequelize.UUID,
        references: {
          model: 'courses',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT',
      },

      order:{
        type:Sequelize.INTEGER,
        defaultValue:1,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    })
  },

  async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('modules');

  }
};
