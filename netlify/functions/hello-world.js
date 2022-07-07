const { builder } = require("@netlify/functions");

async function handler(event, context) {
  const time = new Date().toLocaleTimeString();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: `
    <!DOCTYPE html>
      <html>
        <body>
          Hello World at ${time}
        </body>
    </html>
    `,
    ttl: 60,
  };
}

exports.handler = builder(handler);
