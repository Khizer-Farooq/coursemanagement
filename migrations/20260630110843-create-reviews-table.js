'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('reviews',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },

    rating:{
        type:Sequelize.INTEGER,
        allowNull:false,
        
    },
    comment:{
        type:Sequelize.TEXT,
        allowNull:false,

    },
      course_id:{
        type:Sequelize.UUID,
       
        references:{
          model:'courses',
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
    await queryInterface.dropTable('reviews')
  }
};

