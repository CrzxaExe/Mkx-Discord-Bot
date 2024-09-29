import { ActivityType } from "discord.js";

export default async function (client, messages) {
  // Loging if program connect to discord bot
  console.log(
    `[System] Logged and setting up as ${client.user.username}#${client.user.discriminator}.`
  );

  // Set bot status
  client.user.setPresence({
    activities: [{ name: "CrzxaExe3", type: ActivityType.Listening }],
    status: "online",
  });
}
