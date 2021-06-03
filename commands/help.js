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

*** <:1_:842833259356618807> | User Commands***

${PREFIX}invite - ${PREFIX}support
${PREFIX}about - ${PREFIX}uptime
${PREFIX}ping - ${PREFIX}invites
${PREFIX}avatar - ${PREFIX}se

*** <:emoji_12:842708529717968896> | Music Commands***

${PREFIX}play - ${PREFIX}skip
${PREFIX}skipto - ${PREFIX}nowplaying
${PREFIX}stop - ${PREFIX}volume
${PREFIX}nowplaying - ${PREFIX}resume
${PREFIX}shuffle - ${PREFIX}search
${PREFIX}remove - ${PREFIX}queue 
${PREFIX}filter - ${PREFIX}radio
${PREFIX}loop - ${PREFIX}
***<a:emoji_5:849925518450098206> | Gif Commands***

*${PREFIX}boy* - *${PREFIX}gifblack*
*${PREFIX}smoking*

*** <a:emoji_6:837819751677296670> | FunCommands***

${PREFIX}prefix - ${PREFIX}giveway
${PREFIX}lock - ${PREFIX}unlock 
${PREFIX}ban - ${PREFIX}unban
${PREFIX}slowmode - ${PREFIX}invites
**Links**<a:emoji_4:849925496723603488>
[support](https://discord.gg/m6bUgytWp9)    -    [invite](https://discord.com/api/oauth2/authorize?client_id=784303756925468713&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
