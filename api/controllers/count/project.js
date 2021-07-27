module.exports = {


  friendlyName: 'Project',


  description: 'Project count total cost.',


  inputs: {

  },


  exits: {

  },

  fn: async function () {
    var projects = await Project.find();
    const totalCost = projects.reduce((prev, curr) => {
      return prev + curr.totalCost;
    }, 0);
    return totalCost;
  }


};
