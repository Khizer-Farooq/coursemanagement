'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users',{
        id:{
          type: Sequelize.UUID,
          primaryKey:true,
          defaultValue:Sequelize.UUIDV1
            },
        name:{
          type: Sequelize.STRING,
          allowNull:false
        },
        email:{
          type:Sequelize.STRING,
          allowNull:false,
          unique:true,
        },
        password:{
          type:Sequelize.STRING(150),
          allowNull:false,
        },
        role:{ 
        type:Sequelize.ENUM('INSTRUCTOR','STUDENT'),
        allowNull:false,
        defaultValue:"STUDENT"
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
    await queryInterface.dropTable('users')
    

  }
};
