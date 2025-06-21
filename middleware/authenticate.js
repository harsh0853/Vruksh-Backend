const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const header = req.header.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decode = jwt.verify(header.split(" ")[1], "key");
    req.user = decode;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid user" });
  }
};

module.exports = auth;
