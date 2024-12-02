export const run = async (client, { msg, args }) => {
  const count = Number(args[0]) || 1;
  for (let i = 0; i < count; i++) {
    try {
      await msg.bulkDelete(1);
    } catch (err) {
      msg.send(err.message);
    }
  }
};

export const config = {
  name: "clear",
  des: "Membersihkan chat di dalam channel",
  mod: true,
  alias: [],
};
