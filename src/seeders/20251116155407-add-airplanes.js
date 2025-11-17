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
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'Airbus A320neo',
        capacity: 194,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber: 'Boeing 737 Max',
        capacity: 230,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber: 'Cessna 172 Skyhawk',
        capacity: 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber: 'Boeing 777 Max',
        capacity: 210,
        createdAt : new Date(),
        updatedAt : new Date()
      }
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
