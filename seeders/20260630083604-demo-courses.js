'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const IDS = {
      INSTRUCTOR_1: '11111111-2222-3333-4444-555555555555',

      COURSE_1: '44444444-5555-6666-7777-888888888888',
      COURSE_2: '55555555-6666-7777-8888-999999999999',
      COURSE_3: '66666666-7777-8888-9999-aaaaaaaaaaaa',
    };
    await queryInterface.bulkInsert('courses', [
      {
        id: IDS.COURSE_1,
        title: 'Machine Learning',
        description: "train and test the models of AI",
        user_id: IDS.INSTRUCTOR_1

      },
      {
        id: IDS.COURSE_2,
        title: 'WEB DEVELOPMENT ',
        description: "learn full stack web app development with mern",
        user_id: IDS.INSTRUCTOR_1
      },
      {
        id: IDS.COURSE_3,
        title: 'DATABASES ',
        description: "Includes sql and maql",
        user_id: IDS.INSTRUCTOR_1
      }
    ], { ignoreDuplicates: true })
  },

  async down(queryInterface, Sequelize) {

  }
};
