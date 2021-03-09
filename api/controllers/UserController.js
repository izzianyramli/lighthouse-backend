/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: async function welcomeUser(req, res) {
    var userId = req.param('userId');
    if (!_.isNumeric(userId)) {
      return res.badRequest(new Error('No user ID specified!'));
    }

    var user = await User.findOne({ id: userId });
    if (!user) {
      return res.redirect('/signup');
    }
    return res.view('welcome', { name: user.name });
  },
};

