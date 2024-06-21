import fs from 'fs';

export default async (client) => {
  // Get command folder
  fs.readdir('./src/commands/', (err, files) => {
    if(err) return console.error("[System] No folder named commands in src",err)

    // Filter files on command folder
    let cmds = files.filter(e => e.split(".")[1] === "js")

    if(!cmds[0]) return console.error("[System] No file on commands folder")
    cmds.forEach(async cmd => {
      // Get file
      let pull = await import(`../commands/${cmd}`);

      // Add to collection
      client.commands.set(pull.config.name, pull);
      pull.config.alias.forEach(alias => {// if has alias it will add to aliases collection
        client.aliases.set(alias, pull.config.name);
      })
    });
  });
};
