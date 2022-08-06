"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const swapi = require("swapi-node");

module.exports.crearRegistro = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { id } = JSON.parse(event.body);

  const data = await swapi
    .people({ id: id })
    .then((res) => res)
    .catch((err) => {});

  const persona = data;

  if (!persona?.name) {
    return {
      statusCode: 404,
      body: "No se encontró el personaje",
    };
  }

  const Item = {
    id: v4(),
    idPeople: persona.idPeople,
    nombre: persona.name,
    altura: persona.height,
    masa: persona.mass,
    color_cabello: persona.hair_color,
    color_piel: persona.skin_color,
    color_ojos: persona.eye_color,
    genero: persona.gender,
  };
  await dynamoDb
    .put({
      TableName: "Tabla1",
      Item: Item,
    })
    .promise()
    .then(() => {})
    .catch((err) => {});

  return {
    statusCode: 200,
    body: "Se creó el registro",
  };
};
