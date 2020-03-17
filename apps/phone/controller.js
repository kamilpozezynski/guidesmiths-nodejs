import phones from "../../config/bbdd/phones.json";

export default {
  getphones: async (req, res) => {
    try {
      // Aquí Se haría una query de verdad...
      // const phones = await models.phones.getAll();
      res.status(200).json(phones);
    } catch (e) {
      res.status(404).send("Error!");
    }
  }
};
