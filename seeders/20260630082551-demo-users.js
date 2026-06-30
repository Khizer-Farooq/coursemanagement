'use strict';


module.exports = {
  async up(queryInterface) {
    const hashedPassword = 'password123'
    const user1 = '11111111-2222-3333-4444-555555555555'
    const user2 = '22222222-3333-4444-5555-666666666666'
    const user3 = '33333333-4444-5555-6666-777777777777'

    await queryInterface.bulkInsert('users', [
      {
        id: user1,
        name: 'khizer',
        email: 'khizer@gmail.com',
        password: hashedPassword,
        role: 'INSTRUCTOR',

      },
      {
        id: user2,
        name: 'awais',
        email: 'awais@gmail.com',
        password: hashedPassword,
        role: 'STUDENT',

      },
      {
        id: user3,
        name: 'taimoor',
        email: 'taimoor@gmail.com',
        password: hashedPassword,
        role: 'STUDENT',

      },
    ], { ignoreDuplicates: true });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', {
      email: [
        'taimoor@gmail.com',
        'khizer@gmail.com',
        'awais@gmail.com'
      ]
    });
  },
};