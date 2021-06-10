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
      type: 'json' //productivity, Overall Equipment Effectiveness (OEE), Operating cost, Quality cost
    },
    KPIsustainability: {
      type: 'json'
    },
    KPIagility: {
      type: 'json',
      columnType: 'array'
    },
    KPIspeedToMarket: {
      type: 'json',
      columnType: 'array'
    },
    KPIcustomization: {
      type: 'json',
      columnType: 'array'
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

