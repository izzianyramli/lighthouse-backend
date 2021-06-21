/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');

module.exports = {

  login: function (req, res) {
    passport.authenticate('local', (err, user, info) => {
      if ((err) || (!user)) {
        return res.send({
          message: info,
          user,
        });
      }
      req.login(user, (err) => {
        if (err) { res.send(err); }
        return res.send({
          message: err,
          user,
          err,
        });
      });
    })(req, res);
  },

  logout: function (req, res) {
    req.logout();
    res.redirect('/');
  }
};

