"use strict";
const AWS = require("aws-sdk");
const { obtenerPersonajeStarWars } = require("./obtenerPersonajeStarWars");

module.exports.crearRegistro = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { id } = JSON.parse(event.body);

  //CONSUMO DE API DE STARWARS
  var personaje=await obtenerPersonajeStarWars(id);
  if(!personaje){
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "Personaje no encontrado",
      }),
    };
  }
  await dynamoDb
    .put({
      TableName: "Tabla1",
      Item: personaje,
    })
    .promise()
    .then(() => {})
    .catch((err) => {});

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Personaje creado",
    }),
  };
  
};
