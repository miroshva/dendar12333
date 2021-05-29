const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands Pinky**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(``)
    .setTitle(`Pinkt Is One`)
    .setDescription(`

***<a:7_:845582001544364033> | User Commands***

${PREFIX}invite - ${PREFIX}support
${PREFIX}about - ${PREFIX}uptime
${PREFIX}ping - ${PREFIX}invites
${PREFIX}avatar - ${PREFIX}se

***<a:21:846363425155055647> | Music Commands***

${PREFIX}play - ${PREFIX}skip
${PREFIX}skipto - ${PREFIX}nowplaying
${PREFIX}stop - ${PREFIX}volume
${PREFIX}nowplaying - ${PREFIX}resume
${PREFIX}shuffle - ${PREFIX}search
${PREFIX}remove - ${PREFIX}queue 
${PREFIX}filter - ${PREFIX}radio
${PREFIX}loop - ${PREFIX}lyrics
**<a:16:846357425343037472> | FunCommands**

${PREFIX}prefix - ${PREFIX}giveway
${PREFIX}lock - ${PREFIX}unlock 
${PREFIX}ban - ${PREFIX}unban
${PREFIX}slowmode - ${PREFIX}invites
**Links** <a:emoji_27:847407354005291018>
[support](https://discord.gg/m6bUgytWp9)    -    [invite](https://discord.com/api/oauth2/authorize?client_id=784303756925468713&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
