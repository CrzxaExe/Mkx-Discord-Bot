import {
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ApplicationCommandOptionType,
  ActivityType,
  PresenceUpdateStatus,
} from "discord.js";
import { findGuild, updateGuild } from "../utils/guild";
import { consoleTime, restrictF } from "../utils/console";
import pks from "../../package.json";
import ms from "pretty-ms";

export const run = async (client, { interaction, options }) => {
  const guild = await findGuild(interaction.guild.id),
    query = options.get("query")?.value,
    query2 = options.get("query2")?.value,
    query3 = options.get("query3")?.value ?? "";

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
      } Slash Commands\n\nSubcommand:
      Activity <query2: String> <query3: ActivityType>
      Prefix <query2: String>
      Presence <query2: PresenceType>
      UserName <query2: String>`
    )
    .setFooter({ text: "MKx" });

  const invButton = new ButtonBuilder()
    .setLabel("Invite")
    .setURL(
      `https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`
    )
    .setStyle(ButtonStyle.Link);

  const action = new ActionRowBuilder().addComponents(invButton);

  switch (query) {
    case 0:
      await client.user.setActivity(query2 ?? "Kyle", {
        type: ActivityType[
          query3.charAt(0).toUpperCase() + query3.slice(1).toLowerCase()
        ],
      });
      interaction.reply(`Mengatur activity ke ${query2} type ke ${query3}`);
      break;

    case 1:
      try {
        await updateGuild(interaction.guild.id, { prefix: query2 || "mkx" });

        interaction.reply(`Prefix berubah menjadi ${query2}!`);
      } catch (err) {
        console.log(
          restrictF("[System" + consoleTime() + "]") + " Error on saving data"
        );
        interaction.reply(`Error saat menyimpan data: ${error.message}!`);
      }
      break;
    case 2:
      await client.user.setStatus(
        PresenceUpdateStatus[
          query2.charAt(0).toUpperCase() + query2.slice(1).toLowerCase()
        ]
      );
      interaction.reply(`Status bot berubah menjadi ${query2}`);
      break;
    case 3:
      await client.user.setUsername(query2 ?? "MKx");
      interaction.reply(`Mengubah nama saya menjadi ${query2 ?? "MKx"}`);
      break;
    default:
      interaction.reply({ embeds: [emb], components: [action] });
  }
};

export const config = {
  name: "bot",
  description: "Status bot",
  options: [
    {
      name: "query",
      description: "Kueri",
      type: ApplicationCommandOptionType.Integer,
      choices: [
        {
          name: "Activity",
          value: 0,
        },
        {
          name: "Prefix",
          value: 1,
        },
        {
          name: "Status",
          value: 2,
        },
        {
          name: "Username",
          value: 3,
        },
      ],
    },
    {
      name: "query2",
      description: "Kueri",
      type: ApplicationCommandOptionType.String,
    },
    {
      name: "query3",
      description: "Kueri",
      type: ApplicationCommandOptionType.String,
    },
  ],
};
