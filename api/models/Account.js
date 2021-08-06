/**
 * Account.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt-nodejs');

module.exports = {

  attributes: {

    firstName: {
      type: 'string',
      // required: true
    },
    lastName: {
      type: 'string',
      // required: true
    },
    companyName: {
      type: 'string',
      // required: true
    },
    division: {
      type: 'string',
      // required: true
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true,
      // encrypt: true,
    },
    policy: {
      type: 'boolean',
      // required: true
    },
    approval: {
      type: 'boolean',
      defaultsTo: false,
    },
    accountType: {
      type: 'string',
      defaultsTo: 'user',
    },
  },
  customToJSON: function () {
    return _.omit(this, ['password']);
  },
  beforeCreate: function (user, cb) {
    bcrypt.genSalt(10, (_err, salt) => {
      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) { return cb(err); }
        user.password = hash;
        return cb();
      });
    });
  }
};

