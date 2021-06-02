let fs = require("fs") //npm i fs
let ticket = JSON.parse(fs.readFileSync("./ticket.json","utf8"))
client.on("message" , robotCodes => {
  if(robotCodes.author.bot || !robotCodes.channel.guild) return;
  if(robotCodes.content.startsWith(prefix + "ticketSetup")){
  let rome = robotCodes.content.split(/ +/)[1];
  let findrome = robotCodes.guild.channels.cache.filter(c => c.type === "category").find(r => r.id === rome)
  if(!findrome) return robotCodes.reply("I can't Find The Rome Or I can't Find The Category")
  let role = robotCodes.content.split(/ +/)[2];
  let findrole = robotCodes.guild.roles.cache.find(r => r.id == role)
  if(!rome) return robotCodes.reply("Please Enter A Rome \n Usage +ticket Setup <categoryId> <RoleId>")
  if(!role) return robotCodes.reply("Please Enter A Role +ticket Setup <categoryId> <RoleId>")
  if(!findrole) return robotCodes.reply("I Can't Find The Role In This Server")
  if(!robotCodes.member.hasPermission("ADMINISTRATOR")) return robotCodes.reply("You Need The **ADMINISTRATOR** Premission")
  robotCodes.channel.send(`Done \n Category Id : ${rome} \n role : <@&${role}>`)
  ticket[robotCodes.guild.id] = {
    category : rome,
    role : role,
    count: 0,
    onoff:"on"
  }
  fs.writeFile("./ticket.json", JSON.stringify(ticket), function(e) {
  if (e) throw e;
  });
}
});
 
 
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleTicket")) {
    if (!message.channel.guild) return message.reply("**This Command For Serverr**");
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`${message.author}, Sorry You Need \`MANAGE_GUILD\` for use this command`);
    if (!ticket[message.guild.id])
      ticket[message.guild.id] = {
        onoff: "Off"
      };
    if (ticket[message.guild.id].onoff === "off") return [
      message.channel.send(`**The ticket Is __𝐎𝐍__ !**`),
      (ticket[message.guild.id].onoff = "on")
    ];
    if (ticket[message.guild.id].onoff === "on") return [
      message.channel.send(`**The ticket Is __𝐎𝐅𝐅__ !**`),
      (ticket[message.guild.id].onoff = "off")
    ];
    fs.writeFile("./ticket.json", JSON.stringify(ticket), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
 
 
let tchannels = [];
 
client.on("message" , robotCodes => {
  if (robotCodes.author.bot || robotCodes.channel.type === "dm") return;
 
  let author = robotCodes.author.id;
  let jsti = ticket[robotCodes.guild.id];
  let mtickets = ticket[robotCodes.guild.id].onoff;
  let category = ticket[robotCodes.guild.id].category;
  let staff = ticket[robotCodes.guild.id].role;
  let current = ticket[robotCodes.guild.id].count;
  if(robotCodes.content.startsWith(prefix + "new")){
  if(mtickets === "off") return robotCodes.reply("karnakat")
  if(!ticket[robotCodes.guild.id]) ticket[robotCodes.guild.id] = {
        onoff: 'Off'
            }
  if(!category) ticket[robotCodes.guild.id] = {
        onoff: 'Off'
            }
  if(!category) return robotCodes.reply("Please Select A Category")
  if(!jsti) return robotCodes.reply("Please Choise A Categoy And Role \n Usage : +ticketSetup <CategoryId> <RoleId>")
    console.log(current);
    let reason = robotCodes.content.split(" ").slice(1);
    if(!reason) return robotCodes.reply("")
    current++;
       robotCodes.guild.channels.create(`ticket-${current}`, "text").then(c => {
      tchannels.push(c.id);
      c.setParent(category);
      robotCodes.channel.send(`**created**`);
      let role2 = robotCodes.guild.roles.cache.find(r => r.name === "@everyone")
      c.overwritePermissions(role2, {
        READ_MESSAGES: false,
        SEND_MESSAGES: false
      });
      c.overwritePermissions(OmegaCodes.author.id, {
        READ_MESSAGES: true,
        SEND_MESSAGES: true
      });
      let embed = new Discord.MessageEmbed()
      .setAuthor(robotCodes.author.username, robotCodes.author.avatarURL())
       .setColor("#36393e")
      .setDescription(`**Wait Admin To Answer You**${reason}`);
      c.send(`${robotCodes.author}`);
      c.send(embed);
      c.send(`<@&${staff}>`)
    });      }
    ticket[robotCodes.guild.id].count++
      fs.writeFile("./ticket.json", JSON.stringify(ticket), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
  })  
});
 
 
//rename
client.on("message" , robotCodes => {
    if(robotCodes.author.bot || !robotCodes.channel.guild) return;
    if (!robotCodes.member.hasPermission('ADMINISTRATOR')) return robotCodes.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
  if(robotCodes.content.startsWith(prefix + "rename")){
    if (!robotCodes.channel.name.startsWith(`ticket-`)) return robotCodes.reply(`** can't rename other room.**`)
  let newName = robotCodes.content.split(" ").slice(1).join(" ");
  robotCodes.channel.setName("ticket" + " " + newName)
  robotCodes.channel.send("Done The Name Of This Rome Is : "+ "ticket" + "-" + newName)
 
  }
});
//delete
client.on("message" , robotCodes => {
  if(robotCodes.author.bot || !robotCodes.channel.guild) return;
  if (!robotCodes.member.hasPermission('ADMINISTRATOR')) return robotCodes.channel.send('❌|**\`ADMINISTRATOR\`you don't have permission`**');
  if(robotCodes.content.startsWith(prefix + "delete")){
  if (!robotCodes.channel.name.startsWith(`ticket-`)) return robotCodes.reply(`** command not working other room.**`)
        robotCodes.channel
      .send(
        `**please send `\${prefix}confirm\` to run command .**`
      )
      .then(m => {
        robotCodes.channel
          .awaitMessages(response => response.content === `${prefix}confirm`, {
            max: 1,
            time: 10000,
            errors: ["time"]
          })
          .then(collected => {
            robotCodes.channel.delete();
          })
          .catch(() => {
            m.edit("**end time not close room**").then(
              m2 => {
                m2.delete();
              },
              3000
            );
          });
      });
ticket[robotCodes.guild.id].count--;
      fs.writeFile("./ticket.json", JSON.stringify(ticket), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
  })  
  }
});
 
//add & remove
client.on("message" , robotCodes => {
  if(robotCodes.content.startsWith(prefix + "add")){
  if (!robotCodes.channel.name.startsWith(`ticket-`)) {
 const embed4 = new Discord.MessageEmbed().addField(
 `**TicketsERORR**`,
 `**only for tickets roo. .**`
 );
 robotCodes.channel.send({ embed: embed4 });
 return;
 }
 let addedmember = robotCodes.mentions.members.first();
 if (addedmember < 1) return robotCodes.reply("**mention person**");
 robotCodes.channel.updateOverwrite(addedmember, {
 SEND_MESSAGES: true,
 VIEW_CHANNEL: true
 });
 const embed5 = new Discord.MessageEmbed().addField(
 `**Ticket Bot**`,
 "**" +
 addedmember +
 `added person now write --> \n [${prefix}remove]().**`
 );
 robotCodes.channel.send({ embed: embed5 });
 }
});
 
client.on("message" , robotCodes => {
  if(robotCodes.content.startsWith(prefix + "remove")){
  if (!robotCodes.channel.name.startsWith(`ticket-`)) {
 const embed4 = new Discord.MessageEmbed().addField(
 `**TicketsERORR**`,
 `** only tickets room.**`
 );
 robotCodes.channel.send({ embed: embed4 });
 return;
 }
 let removedmember = robotCodes.mentions.members.first();
 if (removedmember < 1) return robotCodes.reply("** write name person **");
 robotCodes.channel.updateOverwrite(removedmember, {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: false
 });
 const embed5 = new Discord.MessageEmbed().addField(
      `Ticket Bot`,
      "**" + removedmember + " removed.**"
);
 robotCodes.channel.send({ embed: embed5 });
 }
}); 
