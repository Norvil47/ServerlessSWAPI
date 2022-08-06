const AWS = require("aws-sdk");

const leerRegistros = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const result = await dynamodb.scan({ TableName: "Tabla1" }).promise();
  return {
    status: 200,
    body: JSON.stringify(result.Items),
  };
};

module.exports = {
  leerRegistros,
};
