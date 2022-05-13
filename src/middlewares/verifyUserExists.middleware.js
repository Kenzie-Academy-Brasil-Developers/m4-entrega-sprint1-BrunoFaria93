import DB from "../database";

const verifyUserExists = (req, res, next) => {
  const foundUser = DB.find(
    ({ email }) => email.toLowerCase() === req.body.email.toLowerCase()
  );

  if (foundUser) {
    return res.status(409).json({ message: "email already exists!" });
  }

  return next();
};


export default verifyUserExists;