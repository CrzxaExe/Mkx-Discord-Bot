import { ActivityType } from 'discord.js';

export default async function (client, messages) {
  console.log(`[System] Logged and setting up as ${client.user.username}#${client.user.discriminator}.`)
  
  client.user.setPresence({ activities: [{ name: "CrzxaExe3", type: ActivityType.Listening }], status: "online" })
};
