import { ApplicationCommandOptionType } from "discord.js";
import axios from "axios";

export const run = async (client, { interaction, options }) => {
  await interaction.reply("Mengirim form ke Rest API");

  const link = options.get("link");

  try {
    let res = await axios.post(process.env.REST + "fbdl", {
      link: link.value,
    });

    if (res.data.result.Title === "")
      return await interaction.editReply("Video tidak dapat diambil");

    await interaction.editReply(
      res.data.result.HD
        ? "Video didapatkan, link: " + res.data.result.HD
        : "Video didapatkan, link: " + res.data?.result?.SD
    );
  } catch (err) {
    await interaction.editReply("Tidak dapat mengambil link anda");
    console.error(err);
  }
};

export const config = {
  name: "fb",
  description: "Unduh video dari facebook",
  options: [
    {
      name: "link",
      description: "Tautan video facebook",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
};
