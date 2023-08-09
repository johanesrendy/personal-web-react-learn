const knexQuery = require("../models/knex");
const experience = require("../assets/json/experience copy.json");

const add = (req, res) => {
  res.send({
    message: "Data retrieved",
    status: "OK",
    data: experience,
  });
};

const create = async (req, res) => {
  const body = req.body;
  const insertData = await knexQuery("users").insert({
    institution: body.institution,
    position: body.position,
    description: body.description,
    startDate: body.startDate,
    endDate: body.endDate,
  });
  return res.status(201).send({
    message: "Data added",
  });
};

module.exports = { create, add };
