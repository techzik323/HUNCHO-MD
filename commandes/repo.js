"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");

france({ nomCom: "repo", catégorie:"Général", reaction: "☠", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/keithkeizzah/HUNCHO-MD';
  const img = 'https://telegra.ph/file/6301c0dea1346b7bdf349.mp4';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `Hello 👋,, @${membre.split("@")[0]}\n this is HUNCHO-MD created by Kᴇɪᴛʜ Kᴇɪᴢᴢᴀʜ kindly give a star🌟and fork my repository`
𝄤 *REPOSITORY:* ${data.html_url}
𝄤 *STARS:* ${repoInfo.stars}
𝄤 *FORKS:* ${repoInfo.forks}
𝄤 *RELEASE DATE:* ${releaseDate}
𝄤 *UPDATE ON:* ${repoInfo.lastUpdate}
𝄤 *OWNER* :keithkeizzah
𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗖𝗛𝗢𝗢𝗦𝗜𝗡𝗚 𝗛𝗨𝗡𝗖𝗛𝗢`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
