const { builder } = require("@netlify/functions");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://toqqtvqopcjiklnztuiz.supabase.co",
  process.env.SUPABASE_KEY
);

async function handler(event, context) {
  const time = new Date().toLocaleTimeString();
  const { data } = await supabase.from("state").select();

  return {
    statusCode: data[0].status,
    headers: {
      "Content-Type": "text/html",
    },
    body: `
    <!DOCTYPE html>
      <html>
        <body>
          Status code ${data[0].status} at ${time}
        </body>
    </html>
    `,
    ttl: 60,
  };
}

exports.handler = builder(handler);
