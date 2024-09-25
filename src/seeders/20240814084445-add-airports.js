'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Kazi Nazrul Islam Airport',
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kempagora International Airport',
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mysuru Airport',
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hubballi Airport',
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
