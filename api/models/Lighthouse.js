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
      type: 'json' //productivity, Overall Equipment Effectiveness (OEE), Operating cost, Quality cost
    },
    sustainability: {
      type: 'json'
    },
    agility: {
      type: 'json',
      columnType: 'array'
    },
    speedToMarket: {
      type: 'json',
      columnType: 'array'
    },
    customization: {
      type: 'json',
      columnType: 'array'
    },
    others: {
      type: 'string'
    },
    owner: {
      model: 'company'
    }
  },

};

