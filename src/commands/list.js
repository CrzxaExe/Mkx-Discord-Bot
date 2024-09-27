import { EmbedBuilder } from "discord.js";

export const run = (client, { msg }) => {
  let emb = new EmbedBuilder()
    .setTitle("Daftar Perintah")
    .setDescription(
      `${[...client.commands.keys()]
        .sort((a, b) => a.localeCompare(b))
        .map((e) => {
          let ob = client.commands.get(e).config;

          return `\n~ ${e} - ${ob.des ? ob.des : ""}`;
        })
        .join("")}`
    )
    .setFooter({ text: "MKx" });

  msg.send({ embeds: [emb] });
};

export const config = {
  name: "list",
  des: "Daftar command",
  alias: ["menu"],
};
