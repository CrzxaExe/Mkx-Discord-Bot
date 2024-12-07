import { ActivityType, PresenceUpdateStatus } from "discord.js";
import { consoleTime, normalF, restrictF } from "../utils/console";

export default async function (client, messages) {
  // Loging if program connect to discord bot
  console.log(
    `${normalF(
      "[System" + consoleTime() + "]"
    )} Logged and setting up as ${restrictF(
      client.user.username + "#" + client.user.discriminator
    )}.`
  );

  const activity = ["CrzxaExe3", "Kyle"];

  // Set bot status
  client.user.setPresence({
    activities: [
      {
        name: activity[Math.floor(Math.random() * activity.length)],
        type: ActivityType.Listening,
      },
    ],
    status: PresenceUpdateStatus.Online,
  });
}
