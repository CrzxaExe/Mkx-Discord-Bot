export default async (client, interaction) => {
  if (!interaction.isChatInputCommand()) return;

  // Destructuring interaction
  let cmd = interaction.commandName,
      options = interaction.options;

  /* You can use
  let { commandName, options } = interaction;

  But you have to change the cmd
  */

  // Find command
  let command = client.slashes.get(cmd);

  if(!command) return;
  command.run(client, { cmd/* Change this if use destructuring variable */, options, interaction });
};
