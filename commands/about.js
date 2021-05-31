const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "add",
  aliases: ["a"],
  cooldown: 8,
  description: "** Invite pore bot**",
  execute(message) {
    let commands = message.client.commands.array();
    let helpEmbed = new MessageEmbed()
    .setColor('RANDOM') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setAuthor(`Gifs About`)
.setDescription(``)
.addField('Servers', `\`${client.guilds.cache.size}\``, true)
.addField('Channels', `\`${client.channels.cache.size}\``, true)
.addField('Users', `\`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\``, true)
.addField('My Name' , `\`${client.user.tag}\`` , true)
.addField('My ID' , `\`${client.user.id}\`` , true)
.addField('My Ping' , `\`${client.ws.ping}\`` , true)
.addField('Owner Bot' , `<@743887896481628190> ` , true)

   message.react("<a:emoji_27:847407354005291018>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
