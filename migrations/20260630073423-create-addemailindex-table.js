'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addIndex('users',['email'],{
      name:'users_email_idx'
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeIndex('users', 'users_email_idx',)
  }

};
