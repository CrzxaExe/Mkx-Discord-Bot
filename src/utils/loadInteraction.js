import fs from 'fs';

export default async (client) => {
  // Get slash command folder
  fs.readdir("./src/slash", (err, files) => {
    if(err) return console.error("[System] No folder named slash in src ",err);

    // Filter file name
    let slashes = files.filter(e => e.split(".")[1] === "js");

    if(!slashes[0]) return console.error("[System] No file in slash folder ")
    slashes.forEach(async slash => {
      // Get file
      let pull = await import(`../slash/${slash}`);

      // Add to collection
      client.slashes.set(pull.config.name, pull)
    })
  })
};
