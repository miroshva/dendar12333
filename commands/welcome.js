client.on("guildMemberAdd", member => {
  let m = member.user;
  var embed = new Discord.MessageEmbed()
  .setTitle("بەخێربێیت بۆ سێرڤەرەکەمان دڵم تکایە ڕێزی خۆت بگرە")
 .addField("ناو:", member.user)
  .addField("ئایدی ئەندام:", member.id) 
  .addField("تۆ کەسی ژمارە:", member.guild.memberCount)
  .setThumbnail(m.avatarURL())
  .setImage("https://cdn.discordapp.com/attachments/712441079055777895/712441107660800020/image0.jpg")
   .setColor("RANDOM")
    .setFooter(`${member.user.username}`, member.user.avatarURL()) 
    .setTimestamp();
  var channel = member.guild.channels.cache.get("796440254387191838");
  if (!channel) return;
  channel.send({ embed: embed });
});
 
 let qlw = '1'
 
client.on("message", async message => {
const args = message.content.slice(qlw.length).trim().split(/\s+/g);
const command = args.shift().toLowerCase();
    if(!message.content.startsWith(qlw) || message.author.bot) return;
if(command == 'bawan'){     
    client.emit('guildMemberAdd', message.member)
 return message.channel.send('mazbwta')
  }
 
 
 
});
