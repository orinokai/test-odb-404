const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://toqqtvqopcjiklnztuiz.supabase.co",
  process.env.SUPABASE_KEY
);

async function handler(event, context) {
  const status = parseInt(event.queryStringParameters.status);

  const { data } = await supabase
    .from("state")
    .update({ status })
    .match({ id: 1 });

  return {
    statusCode: 200,
    body: JSON.stringify({ status: data[0].status }),
  };
}

exports.handler = handler;
