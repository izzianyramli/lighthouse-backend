/**
 * Project.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    duration: {
      type: 'string'
    },
    totalCost: {
      type: 'number',
      // required: true
    },
    sourceOfTechnology: {
      type: 'string',
      // required: true
    },
    detailsOfTechnology: {
      type: 'string'
    },
    phase: {
      type: 'json'
    },
    projectUpdate: {
      collection: 'projectUpdate',
      via: 'project'
    },
    lighthouse: {
      model: 'lighthouse'
    },
    vendor: {
      model: 'company'
    },
  },

};

