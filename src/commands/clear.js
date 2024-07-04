export const run = async (client, { msg, args }) => {
  try {
    let count = Number(args[0]) || 1
    msg.bulkDelete(count)
  } catch(err) {
    msg.send(err)
  }
};

export const config = {
  name: "cleat",
  alias: []
};
