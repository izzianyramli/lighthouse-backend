const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
passport.serializeUser((user, cb) => {
  cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
  Account.findOne({ id }, (err, users) => {
    cb(err, users);
  });
});
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, ((email, password, cb) => {
  Account.findOne({ email: email }, (err, user) => {
    if (err) {
      return cb(err);
    }
    if (!user) {
      return cb(null, false, { message: 'Email not found' });
    }
    bcrypt.compare(password, user.password, (_err, res) => {
      if (!res) {
        return cb(null, false, { message: 'Invalid Password' });
      }
      let userDetails = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        company: user.companyName,
      };
      return cb(null, userDetails, { message: 'Login Succesful' });
    });
  });
})));
