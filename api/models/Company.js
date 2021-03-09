/**
 * Company.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    source: {
      type: 'string',
      defaultsTo: 'Online Registration',
    },
    companyName: {
      type: 'string',
      required: true
    },
    registrationNumber: {
      type: 'string',
      // unique: true,
      // columnType: id
    },
    contactPerson: {
      type: 'string',
    },
    designation: {
      type: 'string',
    },
    contactNumber: {
      type: 'string'
    },
    email: {
      type: 'string',
      // isIn: ['@', '.com']
    },
    location: {
      type: 'string'
    },
    typeCompany: {
      type: 'string' // anchor or vendor
    },
    productActivity: {
      type: 'string'
    },
    industryDivision: {
      type: 'string'
    },
    lighthouseDetails: {
      collection: 'lighthouse',
      via: 'owner'
    },
    status: {
      type: 'string'
    },
    engagementStatus: {
      type: 'json',
      columnType: 'array'
    },
    projects: {
      collection: 'project',
      via: 'owner'
    }
  },

};




