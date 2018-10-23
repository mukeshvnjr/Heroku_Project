const Account = require('../models').Account;

module.exports = {
  list(req, res) {
    return Account
      .findAll()
      .then((account) => res.status(200).send(account))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Account
      .findById(req.params.id)
      .then((account) => {
        if (!account) {
          return res.status(404).send({
            message: 'Account Not Found',
          });
        }
        return res.status(200).send(account);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Account
      .create({
        shippingstate: req.body.shippingstate || account.shippingstate,
        shippingpostalcode: req.body.shippingpostalcode || account.shippingpostalcode,
        billingcity: req.body.billingcity || account.billingcity,
        accountsource: req.body.accountsource || account.accountsource,
        shippingcountry: req.body.shippingcountry || account.shippingcountry,
        shippinggeocodeaccuracy: req.body.shippinggeocodeaccuracy || account.shippinggeocodeaccuracy,
        name: req.body.name || account.name,
        phone: req.body.phone || account.phone,
        lastmodifiedbyid: req.body.lastmodifiedbyid || account.lastmodifiedbyid,
        shippingstreet: req.body.shippingstreet || account.shippingstreet,
        billingpostalcode: req.body.billingpostalcode || account.billingpostalcode,
        billingstate: req.body.billingstate || account.billingstate,
        shippingcity: req.body.shippingcity || account.shippingcity,
        type: req.body.type || account.type,
        billingcountry: req.body.billingcountry || account.billingcountry,
        billinggeocodeaccuracy: req.body.billinggeocodeaccuracy || account.billinggeocodeaccuracy,
        fax: req.body.fax || account.fax,
        sicdesc: req.body.sicdesc || account.sicdesc,
        crebillingstreetatedbyid: req.body.billingstreet || account.billingstreet,
        sfid: req.body.sfid || account.sfid,
        _hc_lastop: req.body._hc_lastop || account._hc_lastop,
        description: req.body.description || account.description,
        isdeleted: req.body.isdeleted || account.isdeleted,
        description: req.body.description || account.description,
        _hc_err: req.body._hc_err || account._hc_err,
        shippinglongitude: req.body.shippinglongitude || account.shippinglongitude,
        billinglatitude: req.body.billinglatitude || account.billinglatitude,
        billinglongitude: req.body.billinglongitude || account.billinglongitude,
        shippinglatitude: req.body.shippinglatitude || account.shippinglatitude
      })
      .then((account) => res.status(201).send(account))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Account
      .findById(req.params.id)
      .then(account => {
        if (!account) {
          return res.status(404).send({
            message: 'Account Not Found',
          });
        }
        return account
          .update({
            shippingstate: req.body.shippingstate || account.shippingstate,
            shippingpostalcode: req.body.shippingpostalcode || account.shippingpostalcode,
            billingcity: req.body.billingcity || account.billingcity,
            accountsource: req.body.accountsource || account.accountsource,
            shippingcountry: req.body.shippingcountry || account.shippingcountry,
            shippinggeocodeaccuracy: req.body.shippinggeocodeaccuracy || account.shippinggeocodeaccuracy,
            name: req.body.name || account.name,
            phone: req.body.phone || account.phone,
            lastmodifiedbyid: req.body.lastmodifiedbyid || account.lastmodifiedbyid,
            shippingstreet: req.body.shippingstreet || account.shippingstreet,
            billingpostalcode: req.body.billingpostalcode || account.billingpostalcode,
            billingstate: req.body.billingstate || account.billingstate,
            shippingcity: req.body.shippingcity || account.shippingcity,
            type: req.body.type || account.type,
            billingcountry: req.body.billingcountry || account.billingcountry,
            billinggeocodeaccuracy: req.body.billinggeocodeaccuracy || account.billinggeocodeaccuracy,
            fax: req.body.fax || account.fax,
            sicdesc: req.body.sicdesc || account.sicdesc,
            crebillingstreetatedbyid: req.body.billingstreet || account.billingstreet,
            sfid: req.body.sfid || account.sfid,
            _hc_lastop: req.body._hc_lastop || account._hc_lastop,
            description: req.body.description || account.description,
            isdeleted: req.body.isdeleted || account.isdeleted,
            description: req.body.description || account.description,
            _hc_err: req.body._hc_err || account._hc_err,
            shippinglongitude: req.body.shippinglongitude || account.shippinglongitude,
            billinglatitude: req.body.billinglatitude || account.billinglatitude,
            billinglongitude: req.body.billinglongitude || account.billinglongitude,
            shippinglatitude: req.body.shippinglatitude || account.shippinglatitude
          })
          .then(() => res.status(200).send(account))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Account
      .findById(req.params.id)
      .then(account => {
        if (!account) {
          return res.status(400).send({
            message: 'Account Not Found',
          });
        }
        return account
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};