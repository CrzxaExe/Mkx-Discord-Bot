import { ActivityType, PresenceUpdateStatus } from "discord.js";
import { consoleTime, normalF, restrictF } from "../utils/console";

export default async function (client) {
  // Loging if program connect to discord bot
  console.log(
    `${normalF(
      "[System" + consoleTime() + "]"
    )} Logged and setting up as ${restrictF(
      client.user.username + "#" + client.user.discriminator
    )}.`
  );

  const guildCount = [...(await client.guilds.fetch())].length;

  const activity = ["CrzxaExe3", "Crzx"];

  console.log(
    normalF("[System" + consoleTime() + "]") + ` Setting ${guildCount} guilds`
  );

  // Set bot status
  client.user.setPresence({
    activities: [
      {
        name: activity[Math.floor(Math.random() * activity.length)],
        type: ActivityType.Listening,
        state: "with Crzx",
        details: "Test",
        assets: {
          largeImage: "for1",
          largText: "Testing",
          smallImage: "for1",
          smallText: "test",
        },
        buttons: [
          { label: "Visit", url: "https://zxra-create.vercel.app/projects/" },
        ],
      },
    ],
    status: PresenceUpdateStatus.Online,
  });
}
