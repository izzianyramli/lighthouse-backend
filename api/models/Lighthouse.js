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
    KPIproductivity: {
      type: 'string' //productivity, Overall Equipment Effectiveness (OEE), Operating cost, Quality cost
    },
    KPIsustainability: {
      type: 'string'
    },
    KPIagility: {
      type: 'string'
    },
    KPIspeedToMarket: {
      type: 'string'
    },
    KPIcustomization: {
      type: 'string'
    },
    starRanking: {
      type: 'string'
    },
    projects: {
      collection: 'project',
      via: 'lighthouse'
    },
    owner: {
      model: 'company'
    },
  },

};

