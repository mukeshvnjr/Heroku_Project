'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contact', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emailbouncedreason: {
        type: Sequelize.STRING
      },
      mailingstate: {
        type: Sequelize.STRING
      },
      accountid: {
        type: Sequelize.STRING
      },
      assistantname: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      mobilephone: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATEONLY
      },
      phone: {
        type: Sequelize.STRING
      },
      mailingstreet: {
        type: Sequelize.STRING
      },
      emailbounceddate: {
        type: Sequelize.DATE
      },
      isdeleted: {
        type: Sequelize.BOOLEAN
      },
      homephone: {
        type: Sequelize.STRING
      },
      assistantphone: {
        type: Sequelize.STRING
      },
      systemmodstamp: {
        type: Sequelize.DATE
      },
      department: {
        type: Sequelize.STRING
      },
      createddate: {
        type: Sequelize.DATE
      },
      salutation: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      createdbyid: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      fax: {
        type: Sequelize.STRING
      },
      sfid: {
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.NUMBER
      },
      _hc_lastop: {
        type: Sequelize.STRING
      },
      _hc_err: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contacts');
  }
};