export default async function (client, message) {
  if(message.author.bot || message.channel.type === "dm") return;

  let rawContent = message.content.split(" "),
      key = rawContent[0],
      cmd = rawContent[1],
      args = rawContent.slice(2),
      msg = message.channel;

  if(!message.guild) return;

  let prefix = "mkx";

  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) return msg.send(`Gunakan mkx <command>`);
  if(key.toString().toLowerCase() !== prefix || !cmd) return

  let command = client.commands.get(cmd.toString().toLowerCase()) || client.commands.get(client.aliases.get(cmd.toString().toLowerCase()))

  if(command) {
    command.run(client, { message, cmd, args, msg, key })
  }
};