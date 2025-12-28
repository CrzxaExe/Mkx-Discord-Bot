import { findGuild } from "../utils/guild.js";

export const run = async (client, { interaction }) => {
  const guild = await findGuild(interaction.guild.id);

  interaction.reply("Server telah disetting");
};

export const config = {
  name: "setup",
  description: "Setup servermu",
};
