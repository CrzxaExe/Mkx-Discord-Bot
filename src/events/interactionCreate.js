import { PermissionFlagsBits } from "discord.js";

export default async (client, interaction) => {
  if (!interaction.isChatInputCommand()) return;

  // Destructuring interaction
  const cmd = interaction.commandName,
    options = interaction.options,
    gd = await client.guilds.fetch(interaction.guild?.id),
    user = await gd.members.fetch(interaction.user.id);

  /* You can use
  let { commandName, options } = interaction;

  But you have to change the cmd
  */

  // Find command
  const command = client.slashes.get(cmd);

  if (!command) return;

  if (
    !user?.permissions.has(PermissionFlagsBits.Administrator) &&
    command.config.mod
  )
    return interaction.reply("Kamu tidak memilik akses untuk melakukan itu");

  command.run(client, {
    cmd /* Change this if use destructuring variable */,
    options,
    interaction,
  });
};
