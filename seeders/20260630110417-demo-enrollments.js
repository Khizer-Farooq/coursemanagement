'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const user1 = '11111111-2222-3333-4444-555555555555';
    const user2 = '22222222-3333-4444-5555-666666666666';
    const user3 = '33333333-4444-5555-6666-777777777777';

    const course1 = '44444444-5555-6666-7777-888888888888';
    const course2 = '55555555-6666-7777-8888-999999999999';
    const course3 = '66666666-7777-8888-9999-aaaaaaaaaaaa';

    const enrollment1 = 'dddddddd-1111-2222-3333-444444444444';
    const enrollment2 = 'eeeeeeee-2222-3333-4444-555555555555';
    const enrollment3 = 'ffffffff-3333-4444-5555-666666666666';
    const enrollment4 = '11111111-4444-5555-6666-777777777777';
    const enrollment5 = '22222222-5555-6666-7777-888888888888';
    const enrollment6 = '33333333-6666-7777-8888-999999999999';

    await queryInterface.bulkInsert('enrollments', [
      {
        id: enrollment1,
        status: 'ACTIVE',
        course_id: course1,
        user_id: user1,
      
      },
      {
        id: enrollment2,
        status: 'COMPLETED',
        course_id: course2,
        user_id: user1,
      
      },
      {
        id: enrollment3,
        status: 'ACTIVE',
        course_id: course3,
        user_id: user2,
      
      },
      {
        id: enrollment4,
        status: 'EXPELLED',
        course_id: course1,
        user_id: user2,
      
      },
      {
        id: enrollment5,
        status: 'ACTIVE',
        course_id: course2,
        user_id: user3,
      
      },
      {
        id: enrollment6,
        status: 'COMPLETED',
        course_id: course3,
        user_id: user3,
      
      },
    ],{ignoreDuplicates:true});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('enrollments', {
      id: [
        'dddddddd-1111-2222-3333-444444444444',
        'eeeeeeee-2222-3333-4444-555555555555',
        'ffffffff-3333-4444-5555-666666666666',
        '11111111-4444-5555-6666-777777777777',
        '22222222-5555-6666-7777-888888888888',
        '33333333-6666-7777-8888-999999999999',
      ],
    });
  },
};