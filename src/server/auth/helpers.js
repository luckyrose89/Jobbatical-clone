export function isUser(req, res, next) {
  if (!req.user) {
    const err = new Error('Only for authenticated users');
    err.status = 401;
    return next(err);
  }

  next();
}

export function isGuest(req, res, next) {
  if (req.user) {
    const err = new Error('Only for guest users');
    err.status = 401;
    return next(err);
  }

  next();
}

export function sendUser(req, res) {
  const user = req.user.toObject();
  // delete user.data.oauth;
  res.json({ user });
}

export function logout(req, res) {
  req.logout();
  res.json({});
}

export function saveReferrer(req, res, next) {
  req.session.redirectURL = req.header('Referrer');
  next();
}

export function redirect(req, res) {
  res.redirect(req.session.redirectURL || '/');
  delete req.session.redirectURL;
}
