import { EmbedBuilder } from "discord.js";
import axios from "axios";

export const run = async (client, { msg, args }) => {
  try {
    let res = await axios.post(process.env.REST + "fbdl", {
      link: args[0],
    });

    if (res.data.result.Title === "") return msg.send("Vide tidak ditemukan");

    let emb = new EmbedBuilder()
      .setTitle(res.data?.result?.Title)
      .setURL(
        res.data?.result?.HD ? res.data?.result?.HD : res.data?.result?.SD
      )
      .setDescription(
        res.data?.result?.HD
          ? "Video didapatkan, link: " + res.data?.result?.HD
          : "Video didapatkan, link" + res.data?.result?.SD
      )
      .setFooter({ text: "Zxra Rest" });

    msg.send({ embeds: [emb] });
  } catch (err) {
    msg.send("Error saat mengambil data dari API " + err.message);
  }
};

export const config = {
  name: "fb",
  des: "Download video fbmu",
  alias: [],
};
