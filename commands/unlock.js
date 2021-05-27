const Discord = module.require("discord.js");

module.exports = {
   name: "unlock",
   aliases: ["ul"],
   description: "Unlocks a Channel",
   async execute(message, args) {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        null : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("")
   .setTimestamp()
   .setThumbnail(message.author.avatarURL({dynamic: "true"}))
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setDescription(`
🔓 Unlocked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message
`)
   .setColor("#146DF6");
   await message.channel.send(embed);
}
}
