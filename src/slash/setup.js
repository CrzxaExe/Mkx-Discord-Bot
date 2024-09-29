import { ApplicationCommandOptionType } from "discord.js";
import { findGuild } from "../utils/guild";

export const run = async (client, { interaction }) => {
  let guild = await findGuild(interaction.guild.id);

  interaction.reply("Server telah disetting");
};

export const config = {
  name: "setup",
  description: "Setup servermu",
};
