export default async function (client, message) {
  // Message must be in guild
  if(message.author.bot || message.channel.type === "dm") return;

  /*
  * @rawContent: message text has been splited
  * @key       : first word in message, prefix check
  * @cmd       : second word message, using to call command name
  * @args      : rawMessage but slice(no key & cmd)
  * @msg       : channel object
  */
  let rawContent = message.content.split(" "),
      key = rawContent[0],
      cmd = rawContent[1],
      args = rawContent.slice(2),
      msg = message.channel;

  // Check if message is not in guild
  if(!message.guild)
    return;

  let prefix = process.env.PREFIX || "mkx";

  // Help info
  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`)))
    return msg.send(`Gunakan mkx <command>`);

  // Checking the prefix
  if(key.toString().toLowerCase() !== prefix || !cmd)
    return

  // Searching command
  let command = client.commands.get(cmd.toString().toLowerCase()) || client.commands.get(client.aliases.get(cmd.toString().toLowerCase()))

  // Run command if the command exits
  if(command) {
    command.run(client, { message, cmd, args, msg, key })
  }
};