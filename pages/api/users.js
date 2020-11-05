import middleware from "../../middlewares/middleware";
import nextConnect from "next-connect";
import bcrypt from "bcrypt";

const handler = nextConnect();

handler.use(middleware);

handler.post((req, res) => {
  const { email, name, password } = req.body;
  return req.db
    .collection("users")
    .countDocuments({ email })
    .then((count) => {
      if (count) {
        return Promise.reject(Error("The email has already been used."));
      }
      const hash = bcrypt.hashSync(password, 10);
      return hash;
    })
    .then((hashedPassword) =>
      req.db.collection("users").insertOne({
        email,
        password: hashedPassword,
        name,
      })
    )
    .then((user) => {
      //   req?.session?.userId = user.insertedId;
      res.status(201).send({
        status: "ok",
        message: "User signed up successfully",
      });
    })
    .catch((error) =>
      res.send({
        status: "error",
        message: error.toString(),
      })
    );
});

export default handler;
