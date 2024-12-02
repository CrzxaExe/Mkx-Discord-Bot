import {
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} from "discord.js";
import pks from "../../package.json";
import { findGuild } from "../utils/guild";
import ms from "pretty-ms";

export const run = async (client, { interaction }) => {
  const guild = await findGuild(interaction.guild.id);

  const emb = new EmbedBuilder()
    .setTitle(
      client.user.globalName ? client.user.globalName : client.user.username
    )
    .setDescription(
      `Name **MKx**\nVersion **${pks.version}**\nPrefix **${
        guild?.prefix
      }**\n\nUptime **${ms(process.uptime())}**\nPlatform **${
        process.platform
      }**\n\n${[...client.commands.keys()].length} Commands & ${
        [...client.slashes.keys()].length
      } Slash Commands`
    )
    .setFooter({ text: "MKx" });

  const invButton = new ButtonBuilder()
    .setLabel("Invite")
    .setURL(
      `https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`
    )
    .setStyle(ButtonStyle.Link);

  const action = new ActionRowBuilder().addComponents(invButton);

  interaction.reply({ embeds: [emb], components: [action] });
};

export const config = {
  name: "bot",
  description: "Status bot",
};
