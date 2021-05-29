const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "smoking",
  aliases: ["smoking"],
  cooldown: 8,
  description: "** Invite pore bot**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(`https://cdn.discordapp.com/attachments/755893014915711047/828894065332453397/a_96bfa97e6390c54975940689d36b1c21.gif", "https://cdn.discordapp.com/attachments/755893014915711047/828972013040697364/gf.gif", "https://cdn.discordapp.com/attachments/755893014915711047/829244464103030784/Smoking_Men_Smoking_GIF_-_Men_Smoking_Smoke_-_Discover__Share_GIFs.gif", "https://cdn.discordapp.com/attachments/755893014915711047/829244439310106664/Nikolaj_Coster-Waldau_Gif_Hunt.gif", "https://cdn.discordapp.com/attachments/755893014915711047/828893906656690186/KAPTANman_48.gif", "https://cdn.discordapp.com/attachments/755893014915711047/829594717859348480/20.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827979186257526814/ENES_ACAR_GIF_114_-_Kopya.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827978957668220928/Man_319.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827978869209563196/Man_137.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827978647142006804/Man_214.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827683207914323988/a_d4e861205473258d19542f451ed1083e.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827683124221444126/3B7183B3-32B1-4F3E-8469-7C1D75D165C9.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827651030937763880/a_f2c5f020621dc7da6854d194156a5a13.gif", "https://cdn.discordapp.com/attachments/755893014915711047/827567581212573706/a_96bfa97e6390c54975940689d36b1c21.gif`)
    .setTitle(`Pore is One`)
    .setDescription(``)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("<a:emoji_27:847407354005291018>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
