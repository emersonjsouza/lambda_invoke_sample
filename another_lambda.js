"use strict";
module.exports.another_lambda = async (event, context) => {
  return {
    statusCode: 200,
    body: {
      message: `Hey another lambda :)`,
    },
  };
};
