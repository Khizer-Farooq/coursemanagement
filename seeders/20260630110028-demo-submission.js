'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const user1 = '11111111-2222-3333-4444-555555555555';
    const user2 = '22222222-3333-4444-5555-666666666666';
    const user3 = '33333333-4444-5555-6666-777777777777';

    const assignment1 = '11111111-aaaa-bbbb-cccc-dddddddddddd';
    const assignment2 = '22222222-bbbb-cccc-dddd-eeeeeeeeeeee';
    const assignment3 = '33333333-cccc-dddd-eeee-ffffffffffff';
    const assignment4 = '44444444-dddd-eeee-ffff-111111111111';
    const assignment5 = '55555555-eeee-ffff-1111-222222222222';
    const assignment6 = '66666666-ffff-1111-2222-333333333333';

    const submission1 = '77777777-aaaa-bbbb-cccc-dddddddddddd';
    const submission2 = '88888888-bbbb-cccc-dddd-eeeeeeeeeeee';
    const submission3 = '99999999-cccc-dddd-eeee-ffffffffffff';
    const submission4 = 'aaaaaaaa-dddd-eeee-ffff-111111111111';
    const submission5 = 'bbbbbbbb-eeee-ffff-1111-222222222222';
    const submission6 = 'cccccccc-ffff-1111-2222-333333333333';

    await queryInterface.bulkInsert('submissions', [
      {
        id: submission1,
        status: 'SUBMITTED',
        marks: 90,
        assignment_id: assignment1,
        user_id: user1,
      
      },
      {
        id: submission2,
        status: 'SUBMITTED',
        marks: 85,
        assignment_id: assignment2,
        user_id: user1,
      
      },
      {
        id: submission3,
        status: 'SUBMITTED',
        marks: 78,
        assignment_id: assignment3,
        user_id: user2,
      
      },
      {
        id: submission4,
        status: 'PENDING',
        marks: 0,
        assignment_id: assignment4,
        user_id: user2,
      
      },
      {
        id: submission5,
        status: 'SUBMITTED',
        marks: 95,
        assignment_id: assignment5,
        user_id: user3,
      
      },
      {
        id: submission6,
        status: 'PENDING',
        marks: 0,
        assignment_id: assignment6,
        user_id: user3,
      
      },
    ],{ignoreDuplicates:true});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('submissions', {
      id: [
        '77777777-aaaa-bbbb-cccc-dddddddddddd',
        '88888888-bbbb-cccc-dddd-eeeeeeeeeeee',
        '99999999-cccc-dddd-eeee-ffffffffffff',
        'aaaaaaaa-dddd-eeee-ffff-111111111111',
        'bbbbbbbb-eeee-ffff-1111-222222222222',
        'cccccccc-ffff-1111-2222-333333333333',
      ],
    });
  },
};