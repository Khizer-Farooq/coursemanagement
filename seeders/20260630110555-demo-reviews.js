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

    const review1 = '44444444-7777-8888-9999-aaaaaaaaaaaa';
    const review2 = '55555555-8888-9999-aaaa-bbbbbbbbbbbb';
    const review3 = '66666666-9999-aaaa-bbbb-cccccccccccc';
    const review4 = '77777777-aaaa-bbbb-cccc-dddddddddddd';
    const review5 = '88888888-bbbb-cccc-dddd-eeeeeeeeeeee';
    const review6 = '99999999-cccc-dddd-eeee-ffffffffffff';

    await queryInterface.bulkInsert('reviews', [
      {
        id: review1,
        rating: 5,
        comment: 'Excellent course with practical examples.',
        course_id: course1,
        user_id: user1,
      
      },
      {
        id: review2,
        rating: 4,
        comment: 'Very informative and easy to follow.',
        course_id: course2,
        user_id: user1,
      
      },
      {
        id: review3,
        rating: 5,
        comment: 'Loved the hands-on projects.',
        course_id: course3,
        user_id: user2,
      
      },
      {
        id: review4,
        rating: 3,
        comment: 'Good course but could use more exercises.',
        course_id: course1,
        user_id: user2,
      
      },
      {
        id: review5,
        rating: 4,
        comment: 'Clear explanations and well-structured content.',
        course_id: course2,
        user_id: user3,
      
      },
      {
        id: review6,
        rating: 5,
        comment: 'Highly recommended for beginners.',
        course_id: course3,
        user_id: user3,
      
      },
    ],
  {ignoreDuplicates:true});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', {
      id: [
        '44444444-7777-8888-9999-aaaaaaaaaaaa',
        '55555555-8888-9999-aaaa-bbbbbbbbbbbb',
        '66666666-9999-aaaa-bbbb-cccccccccccc',
        '77777777-aaaa-bbbb-cccc-dddddddddddd',
        '88888888-bbbb-cccc-dddd-eeeeeeeeeeee',
        '99999999-cccc-dddd-eeee-ffffffffffff',
      ],
    });
  },
};