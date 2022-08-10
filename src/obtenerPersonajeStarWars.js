"use strict";
const { v4 } = require("uuid");
const swapi = require("swapi-node");
const { mapearPersona } = require("../Utils/MapearPersona");

module.exports.obtenerPersonajeStarWars = async (id) => {


  //CONSUMO DE API DE STARWARS
  const data = await swapi
    .people({ id: id })
    .then((res) => res)
    .catch((err) => {});


  if (!data?.name) {
    return null;
  }

  data.id = v4();
  data.idPeople = id;
  return mapearPersona(data);
};
