'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const course1 = '44444444-5555-6666-7777-888888888888';
    const course2 = '55555555-6666-7777-8888-999999999999';
    const course3 = '66666666-7777-8888-9999-aaaaaaaaaaaa';

    const module1 = '77777777-8888-9999-aaaa-bbbbbbbbbbbb';
    const module2 = '88888888-9999-aaaa-bbbb-cccccccccccc';
    const module3 = '99999999-aaaa-bbbb-cccc-dddddddddddd';

    const module4 = 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
    const module5 = 'bbbbbbbb-cccc-dddd-eeee-ffffffffffff';
    const module6 = 'cccccccc-dddd-eeee-ffff-111111111111';

    const module7 = 'dddddddd-eeee-ffff-1111-222222222222';
    const module8 = 'eeeeeeee-ffff-1111-2222-333333333333';
    const module9 = 'ffffffff-1111-2222-3333-444444444444';

    await queryInterface.bulkInsert('modules', [
      {
        id: module1,
        module_name: 'Introduction',
        course_id: course1,
        order: 1,
        
      },
      {
        id: module2,
        module_name: 'Getting Started',
        course_id: course1,
        order: 2,
        
      },
      {
        id: module3,
        module_name: 'Advanced Concepts',
        course_id: course1,
        order: 3,
        
      },

      {
        id: module4,
        module_name: 'HTML Basics',
        course_id: course2,
        order: 1,
        
      },
      {
        id: module5,
        module_name: 'CSS Fundamentals',
        course_id: course2,
        order: 2,
       
      },
      {
        id: module6,
        module_name: 'JavaScript Essentials',
        course_id: course2,
        order: 3,
        
      },

      {
        id: module7,
        module_name: 'Python Basics',
        course_id: course3,
        order: 1,
      
      },
      {
        id: module8,
        module_name: 'Object-Oriented Programming',
        course_id: course3,
        order: 2,
        
      },
      {
        id: module9,
        module_name: 'Building Projects',
        course_id: course3,
        order: 3,
        
      },
    ], { ignoreDuplicates: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('modules', {
      id: [
        '77777777-8888-9999-aaaa-bbbbbbbbbbbb',
        '88888888-9999-aaaa-bbbb-cccccccccccc',
        '99999999-aaaa-bbbb-cccc-dddddddddddd',
        'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
        'bbbbbbbb-cccc-dddd-eeee-ffffffffffff',
        'cccccccc-dddd-eeee-ffff-111111111111',
        'dddddddd-eeee-ffff-1111-222222222222',
        'eeeeeeee-ffff-1111-2222-333333333333',
        'ffffffff-1111-2222-3333-444444444444',
      ],
    });
  },
};