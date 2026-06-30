'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const course1 = '44444444-5555-6666-7777-888888888888';
    const course2 = '55555555-6666-7777-8888-999999999999';
    const course3 = '66666666-7777-8888-9999-aaaaaaaaaaaa';

    const assignment1 = '11111111-aaaa-bbbb-cccc-dddddddddddd';
    const assignment2 = '22222222-bbbb-cccc-dddd-eeeeeeeeeeee';
    const assignment3 = '33333333-cccc-dddd-eeee-ffffffffffff';
    const assignment4 = '44444444-dddd-eeee-ffff-111111111111';
    const assignment5 = '55555555-eeee-ffff-1111-222222222222';
    const assignment6 = '66666666-ffff-1111-2222-333333333333';

    await queryInterface.bulkInsert('assignments', [
      {
        id: assignment1,
        title: 'NestJS Basics Assignment',
        duedate: new Date('2026-07-15'),
        course_id: course1,
        
      },
      {
        id: assignment2,
        title: 'NestJS CRUD Project',
        duedate: new Date('2026-07-25'),
        course_id: course1,
        
      },

      {
        id: assignment3,
        title: 'HTML Portfolio',
        duedate: new Date('2026-07-18'),
        course_id: course2,
        
      },
      {
        id: assignment4,
        title: 'Responsive Website',
        duedate: new Date('2026-07-30'),
        course_id: course2,
        
      },

      {
        id: assignment5,
        title: 'Python Calculator',
        duedate: new Date('2026-07-20'),
        course_id: course3,
        
      },
      {
        id: assignment6,
        title: 'OOP Banking System',
        duedate: new Date('2026-08-01'),
        course_id: course3,
        
      },
    ],{ignoreDuplicates:true});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assignments', {
      id: [
        '11111111-aaaa-bbbb-cccc-dddddddddddd',
        '22222222-bbbb-cccc-dddd-eeeeeeeeeeee',
        '33333333-cccc-dddd-eeee-ffffffffffff',
        '44444444-dddd-eeee-ffff-111111111111',
        '55555555-eeee-ffff-1111-222222222222',
        '66666666-ffff-1111-2222-333333333333',
      ],
    });
  },
};