'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('submissions',{

      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      status: {
        type: Sequelize.ENUM('PENDING','SUBMITTED'),
        allowNull: false,
        defaultValue:'PENDING'

      },
      marks:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      assignment_id:{
        type:Sequelize.UUID,
       
        references:{
          model:'assignments',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'RESTRICT'
      },

      user_id:{
        type:Sequelize.UUID,
        references:{
          model:'users',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'RESTRICT'
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('submissions')
  }
};
