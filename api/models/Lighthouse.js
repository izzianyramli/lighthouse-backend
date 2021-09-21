/**
 * Lighthouse.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    lighthouseModel: {
      type: 'string'
    },
    lighthouseType: {
      type: 'string'
    },
    productivity: {
      type: 'string' //productivity, Overall Equipment Effectiveness (OEE), Operating cost, Quality cost
    },
    sustainability: {
      type: 'string'
    },
    agility: {
      type: 'string'
    },
    speedToMarket: {
      type: 'string'
    },
    customization: {
      type: 'string'
    },
    starRanking: {
      type: 'string'
    },
    projects: {
      collection: 'project',
      via: 'lighthouse'
    },
    company: {
      model: 'company'
    },
  },

};

