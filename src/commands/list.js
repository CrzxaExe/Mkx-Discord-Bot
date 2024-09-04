export const run = (client, { msg }) => {
  msg.send(
    `Daftar command yang tersedia:${[...client.commands.keys()]
      .sort((a, b) => a.localeCompare(b))
      .map((e, i) => {
        let ob = client.commands.get(e).config;

        return `\n~ ${e} - ${ob.des ? ob.des : ""}`;
      })
      .join("")}`
  );
};

export const config = {
  name: "list",
  des: "Daftar command",
  alias: ["menu"],
};
