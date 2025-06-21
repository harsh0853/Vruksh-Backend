const authorization = (...allowedroles) => {
  return (req, res, next) => {
    if (!req.user || !req.role) {
      return res.status(401).json({ message: "No user found." });
    }

    if (!allowedroles.includes(req.role)) {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    next();
  };
};

module.exports = authorization;
