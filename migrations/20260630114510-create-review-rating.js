'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('reviews', {
  fields: ['rating'],
  type: 'check',
  where: {
    rating: {
      [Sequelize.Op.between]: [1, 5],
    },
  },
  name: 'reviews_rating_check',
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('reviews', 'reviews_rating_check')
  }
};
