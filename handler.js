"use strict";
const AWS = require("aws-sdk");
const Lambda = new AWS.Lambda({
  endpoint: "http://localstack:4566",
});

module.exports.hello = async (event) => {
  const resp = await Lambda.invoke({
    FunctionName: "serverless-offline-local-another_lambda",
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      action: "call another lambda",
      response: JSON.parse(resp.Payload).body,
    }),
  };
};
