import { consoleTime, errorF } from "./console";
import fs from "fs";

export default async (client) => {
  // Get slash command folder
  fs.readdir("./src/slash", (err, files) => {
    if (err)
      return console.log(
        errorF("[System" + consoleTime() + "]") +
          " No folder named slash in src ",
        err
      );

    // Filter file name
    const slashes = files.filter((e) => e.split(".")[1] === "js");

    if (!slashes[0])
      return console.log(
        errorF("[System" + consoleTime() + "]") + " No file in slash folder "
      );

    slashes.forEach(async (slash) => {
      // Get file
      let pull = await import(`../slash/${slash}`);

      // Add to collection
      client.slashes.set(pull.config.name, pull);
    });
  });
};
