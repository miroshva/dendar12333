client.on("guildMemberAdd", member => {
    let channel = member.guild.channels.find("name", "welcome");
    let memberavatar = member.user.avatarURL;
    if (!channel) return;
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(memberavatar)
      .addField(
        ":bust_in_silhouette: | ┃ᴡᴇʟᴄᴏᴍᴇ",
        `__**بــەخــێــربــێــی بــۆ ســێــرڤــەربــە هــیــوای کــاتــێــکــی خــۆش, ${member}**__`
      )
      .addField(":◈━━━━━━━━❮◈❯━━━━━━━━◈:")
      .addField(
        "__**:id: | ئــەکــاونــتــت :**__",
        "**[" + `${member.id}` + "]**"
      )
      .addField(
        "__**:family_mwgb: | تــۆ کــەســی ژمــارە : **__ ",
        `${member.guild.memberCount}`
      )
      .addField(
        "__**📍 | نــاوی مــیــمــبــەر:**__",
        `<@` + `${member.id}` + `>`,
        true
      )
      .addField(
        "__**🔰 | نــاوی ســێــرڤــەر : **__",
        `${member.guild.name}`,
        true
      )
      .setImage(
        "https://media.discordapp.net/attachments/678300317745414165/679375773832052737/image0.gif"
      )
      .setTimestamp();

    channel.sendEmbed(embed);
  });
  client.on("guildMemberRemove", member => {
    let channel = member.guild.channels.find("name", "┃𝙻𝙴𝙵𝚃");
    let memberavatar = member.user.avatarURL;
    if (!channel) return;
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(memberavatar)
      .addField("نــاو:", `${member}`)
      .addField("رۆیــشــت لــە ســێــرڤــەر", ";(")
      .addField(
        "ســێــرڤــەر مــاوە",
        `${member.guild.memberCount}` + " مــێــمــبــەر"
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/755636694035857438/758974172658663424/20200923_140354.gif"
      )
      .setFooter(`${member.guild.name}`)

      .setTimestamp(695838737392861254);

    channel.sendEmbed(embed);
  });
