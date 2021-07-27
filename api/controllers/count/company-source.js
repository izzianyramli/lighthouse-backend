module.exports = {


  friendlyName: 'Company source',


  description: 'Total company source',


  inputs: {
  },


  exits: {

  },


  fn: async function () {
    var midaEngagement = await Company.find({ source: 'MIDA Engagement' });
    var onlineRegistration = await Company.find({ source: 'Online Registration' });
    var midaPotential = await Company.find({ source: 'MIDA Potential Company' });

    const totalMidaEngagement = midaEngagement.length;
    const totalOnlineRegistration = onlineRegistration.length;
    const totalMidaPotential = midaPotential.length;

    return [{ 'MIDAEngagement': totalMidaEngagement, 'OnlineRegistration': totalOnlineRegistration, 'MIDAPotential': totalMidaPotential }];
  }
};
