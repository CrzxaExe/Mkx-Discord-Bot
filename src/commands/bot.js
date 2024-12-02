import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} from "discord.js";
import pks from "../../package.json";
import { findGuild } from "../utils/guild";
import ms from "pretty-ms";

export const run = async (client, { msg, message }) => {
  const guild = await findGuild(message.guild.id);

  let emb = new EmbedBuilder()
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

  msg.send({ embeds: [emb], components: [action] });
};

export const config = {
  name: "bot",
  des: "Bot status",
  alias: [],
};
