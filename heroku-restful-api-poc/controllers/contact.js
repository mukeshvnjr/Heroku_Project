const Contact = require('../models').Contact;

module.exports = {
  list(req, res) {
    return Contact
      .findAll()
      .then((contacts) => res.status(200).send(contacts))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Contact
      .findById(req.params.id)
      .then((contact) => {
        if (!contact) {
          return res.status(404).send({
            message: 'Contact Not Found',
          });
        }
        return res.status(200).send(contact);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Contact
      .create({
        emailbouncedreason: req.body.emailbouncedreason || contact.emailbouncedreason,
        mailingstate: req.body.mailingstate || contact.mailingstate,
        accountid: req.body.accountid || contact.accountid,
        assistantname: req.body.assistantname || contact.assistantname,
        name: req.body.name || contact.name,
        mobilephone: req.body.mobilephone || contact.mobilephone,
        birthdate: req.body.birthdate || contact.birthdate,
        phone: req.body.phone || contact.phone,
        mailingstreet: req.body.mailingstreet || contact.mailingstreet,
        emailbounceddate: req.body.emailbounceddate || contact.emailbounceddate,
        isdeleted: req.body.isdeleted || contact.isdeleted,
        homephone: req.body.homephone || contact.homephone,
        assistantphone: req.body.assistantphone || contact.assistantphone,
        systemmodstamp: req.body.systemmodstamp || contact.systemmodstamp,
        department: req.body.department || contact.department,
        createddate: req.body.createddate || contact.createddate,
        salutation: req.body.salutation || contact.salutation,
        title: req.body.title || contact.title,
        createdbyid: req.body.createdbyid || contact.createdbyid,
        firstname: req.body.firstname || contact.firstname,
        email: req.body.email || contact.email,
        description: req.body.description || contact.description,
        fax: req.body.fax || contact.fax
      })
      .then((contact) => res.status(201).send(contact))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Contact
      .findById(req.params.id)
      .then(contact => {
        if (!contact) {
          return res.status(404).send({
            message: 'Contact Not Found',
          });
        }
        return contact
          .update({
            emailbouncedreason: req.body.emailbouncedreason || contact.emailbouncedreason,
            mailingstate: req.body.mailingstate || contact.mailingstate,
            accountid: req.body.accountid || contact.accountid,
            assistantname: req.body.assistantname || contact.assistantname,
            name: req.body.name || contact.name,
            mobilephone: req.body.mobilephone || contact.mobilephone,
            birthdate: req.body.birthdate || contact.birthdate,
            phone: req.body.phone || contact.phone,
            mailingstreet: req.body.mailingstreet || contact.mailingstreet,
            emailbounceddate: req.body.emailbounceddate || contact.emailbounceddate,
            isdeleted: req.body.isdeleted || contact.isdeleted,
            homephone: req.body.homephone || contact.homephone,
            assistantphone: req.body.assistantphone || contact.assistantphone,
            systemmodstamp: req.body.systemmodstamp || contact.systemmodstamp,
            department: req.body.department || contact.department,
            createddate: req.body.createddate || contact.createddate,
            salutation: req.body.salutation || contact.salutation,
            title: req.body.title || contact.title,
            createdbyid: req.body.createdbyid || contact.createdbyid,
            firstname: req.body.firstname || contact.firstname,
            email: req.body.email || contact.email,
            description: req.body.description || contact.description,
            fax: req.body.fax || contact.fax,
          })
          .then(() => res.status(200).send(contact))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Contact
      .findById(req.params.id)
      .then(contact => {
        if (!contact) {
          return res.status(400).send({
            message: 'Contact Not Found',
          });
        }
        return contact
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};