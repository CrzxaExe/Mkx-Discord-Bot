import axios from 'axios';

export const run = async (client, { msg, args }) => {
  try {
    let res = await axios.post(process.env.REST+"fbdl", {
      link: args[0]
    })
    msg.send(res.data?.result?.HD)
  } catch(err) {
    msg.send("Error saat mengambil data dari API"+err.message)
  }
};

export const config = {
  name: "fb",
  alias: []
};
