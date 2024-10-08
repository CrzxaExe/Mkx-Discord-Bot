import { PermissionFlagsBits } from "discord.js";
import { findGuild } from "../utils/guild";

export default async function (client, message) {
  // Message must be in guild
  if (message.author.bot || message.channel.type === "dm") return;

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
    msg = message.channel,
    gd = await client.guilds.fetch(message.guild?.id),
    user = await gd.members.fetch(message.author.id);

  // Check if message is not in guild
  if (!message.guild) return;

  let guild = await findGuild(message.guild.id);

  let prefix = guild?.prefix || process.env.PREFIX || "mkx";

  // Help info
  if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`)))
    return msg.send(`Gunakan mkx <command>`);

  // Checking the prefix
  if (key.toString().toLowerCase() !== prefix || !cmd) return;

  // Searching command
  let command =
    client.commands.get(cmd.toString().toLowerCase()) ||
    client.commands.get(client.aliases.get(cmd.toString().toLowerCase()));

  // Run command if the command exits
  if (command) {
    if (
      // (message.author.id !== process.env.OWNER_ID && command.config.owner) ||
      !user?.permissions.has(PermissionFlagsBits.Administrator) &&
      command.config.mod
    )
      return msg.send("Kamu tidak memilik akses untuk melakukan itu");

    command.run(client, { message, cmd, args, msg, key, user });
  }
}
