'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Books', [
      {
        judul: 'Sang Keadilan',
        penerbit: 'Cahyo Wahyudi',
        deskripsi: "Seorang anak yang dilahirkan untuk menjadi pendekar naga",
        gambar: "8ycdsyndmrnv5nkvtxf3yx.jpg.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
