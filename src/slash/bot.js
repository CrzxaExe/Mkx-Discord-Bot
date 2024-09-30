import { EmbedBuilder } from "discord.js";
import pks from "../../package.json";
import { findGuild } from "../utils/guild";

export const run = async (client, { interaction }) => {
  let guild = await findGuild(interaction.guild.id);

  let emb = new EmbedBuilder()
    .setTitle(
      client.user.globalName ? client.user.globalName : client.user.username
    )
    .setDescription(
      `Name **MKx**\nVersion **${pks.version}**\nPrefix **${
        guild?.prefix
      }**\n\nPlatform **${process.platform}**\n\n${
        [...client.commands.keys()].length
      } Commands & ${
        [...client.slashes.keys()].length
      } Slash Commands\nInvite https://discord.com/oauth2/authorize?client_id=${
        process.env.BOT_CLIENT
      }&scope=bot&permissions=8`
    )
    .setFooter({ text: "MKx" });

  interaction.reply({ embeds: [emb] });
};

export const config = {
  name: "bot",
  description: "Status bot",
};
