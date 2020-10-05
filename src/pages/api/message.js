const query = require("../../database/queries");

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        return res.json(await query.getAllMessages());
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }

    default:
      break;
  }
};
