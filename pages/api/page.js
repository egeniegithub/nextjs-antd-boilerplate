import middleware from "../../middlewares/middleware";
import nextConnect from "next-connect";
import bcrypt from "bcrypt";

const handler = nextConnect();

handler.use(middleware);

handler.post((req, res) => {
  const { input } = req.body;
  return req.db
    .collection("pages")
    .insertOne(input)
    .then((page) => {
      res.status(201).send({
        status: "ok",
        page: page,
        message: "page added successfully",
      });
    })
    .catch((error) =>
      res.send({
        status: "error",
        message: error.toString(),
      })
    );
});

handler.get((req, res) => {
  req.db
    .collection("pages")
    .find()
    .toArray((err, data) => {
      return res.send({ pages: data });
    });
});

export default handler;
