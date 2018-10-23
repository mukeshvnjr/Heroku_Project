'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    emailbouncedreason: DataTypes.STRING,
    mailingstate: DataTypes.STRING,
    accountid: DataTypes.STRING,
    assistantname: DataTypes.STRING,
    name: DataTypes.STRING,
    mobilephone: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    phone: DataTypes.STRING,
    mailingstreet: DataTypes.STRING,
    emailbounceddate: DataTypes.DATE,
    isdeleted: DataTypes.BOOLEAN,
    homephone: DataTypes.STRING,
    assistantphone: DataTypes.STRING,
    systemmodstamp: DataTypes.DATE,
    department: DataTypes.STRING,
    createddate: DataTypes.DATE,
    salutation: DataTypes.STRING,
    title: DataTypes.STRING,
    createdbyid: DataTypes.STRING,
    firstname: DataTypes.STRING,
    email: DataTypes.STRING,
    description: DataTypes.TEXT,
    fax: DataTypes.STRING,
    sfid: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    _hc_lastop: DataTypes.STRING,
    _hc_err: DataTypes.TEXT
  }, {
    schema: 'salesforce', 
    tableName: 'contact',
    timestamps: false,
  });
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};