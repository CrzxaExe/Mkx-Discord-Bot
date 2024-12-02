import { EmbedBuilder } from "discord.js";

export const run = (client, { msg, args }) => {
  const [max = 10, min = 0] = args;

  const emb = new EmbedBuilder()
    .setTitle("Random Number Generator")
    .setDescription(`Angka yang didapat ${Math.floor(Math.random(min, max))}`)
    .setFooter({ text: "MKX" });

  msg.send({ embeds: [emb] });
};

export const config = {
  name: "rannum",
  des: "Random number generator",
  alias: [],
};
