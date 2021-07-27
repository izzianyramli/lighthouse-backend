module.exports = {
  friendlyName: 'Company location',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function () {
    var johor = await Company.find({ location: 'Johor' });
    var selangor = await Company.find({ location: 'Selangor' });
    var kualaLumpur = await Company.find({ location: 'Kuala Lumpur' });
    var melaka = await Company.find({ location: 'Melaka' });
    var negeriSembilan = await Company.find({ location: 'Negeri Sembilan' });
    var penang = await Company.find({ location: 'Penang' });
    var perak = await Company.find({ location: 'Perak' });
    var terengganu = await Company.find({ location: 'Terengganu' });

    const totalJohor = johor.length;
    const totalSelangor = selangor.length;
    const totalKualaLumpur = kualaLumpur.length;
    const totalMelaka = melaka.length;
    const totalNegeriSembilan = negeriSembilan.length;
    const totalPenang = penang.length;
    const totalPerak = perak.length;
    const totalTerengganu = terengganu.length;

    return [{
      'Johor': totalJohor,
      'KualaLumpur': totalKualaLumpur,
      'Melaka': totalMelaka,
      'NegeriSembilan': totalNegeriSembilan,
      'Penang': totalPenang,
      'Selangor': totalSelangor,
      'Perak': totalPerak,
      'Terengganu': totalTerengganu
    }];
  }
};
