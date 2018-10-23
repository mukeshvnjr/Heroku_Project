'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    billingcity: DataTypes.STRING,
    shippingstate: DataTypes.STRING,
    shippingpostalcode: DataTypes.STRING,
    accountsource: DataTypes.STRING,
    shippingcountry: DataTypes.STRING,
    shippinggeocodeaccuracy: DataTypes.STRING,
    phone: DataTypes.STRING,
    name: DataTypes.STRING,
    lastmodifiedbyid: DataTypes.STRING,
    shippingstreet: DataTypes.STRING,
    billingpostalcode: DataTypes.STRING,
    billingstate: DataTypes.STRING,
    shippingcity: DataTypes.STRING,
    type: DataTypes.STRING,
    billingcountry: DataTypes.STRING,
    billinggeocodeaccuracy: DataTypes.STRING,
    fax: DataTypes.STRING,
    sfid: DataTypes.STRING,
    _hc_lastop: DataTypes.STRING,
    sicdesc: DataTypes.STRING,
    billingstreet: DataTypes.STRING,
    isdeleted: DataTypes.BOOLEAN,
    _hc_err: DataTypes.TEXT,
    description: DataTypes.TEXT,
    createddate: DataTypes.DATE,
    systemmodstamp: DataTypes.DATE,
    lastmodifieddate: DataTypes.DATE,
    shippinglongitude: DataTypes.FLOAT,
    shippinglatitude: DataTypes.FLOAT,
    billinglatitude: DataTypes.FLOAT,
    billinglongitude: DataTypes.FLOAT,
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    }
  }, {
    schema: 'salesforce', 
    tableName: 'account',
    timestamps: false,
  });
  Account.associate = function(models) {
    // associations can be defined here
  };
  return Account;
}; 