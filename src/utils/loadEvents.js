import { actionF, consoleTime, errorF } from "./console.js";
import fs from "fs";

export default class loadEvents {
  constructor(client) {
    this.client = client;
  }

  async init() {
    // Get Events folder
    const files = fs
      .readdirSync("./src/events")
      .filter((x) => x.endsWith(".js"));

    console.log(
      actionF("[System" + consoleTime() + "]") +
        " Load " +
        files.length +
        " events"
    );

    for (const file of files) {
      try {
        // Get file
        let eventMode = await import(`../events/${file}`);
        let event = eventMode.default; // get the default export function

        const name = file.split(".")[0];

        // Binding the event
        this.client.on(name, event.bind(null, this.client));
      } catch (err) {
        console.log(
          errorF("[System" + consoleTime() + "]") +
            " Error on load some command ",
          err
        );
      }
    }
  }
}
