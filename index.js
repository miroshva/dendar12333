/**
 * Module Imports
 */
const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX, LOCALE } = require("./util/EvobotUtil");
const path = require("path");
const i18n = require("i18n");

const client = new Client({
  disableMentions: "everyone",
  restTimeOffset: 0
});

client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

i18n.configure({
  locales: ["ar", "de", "en", "es", "fr", "it", "ko", "nl", "pl", "pt_br", "ru", "sv", "tr", "zh_cn", "zh_tw"],
  directory: path.join(__dirname, "locales"),
  defaultLocale: "en",
  objectNotation: true,
  register: global,

  logWarnFn: function (msg) {
    console.log("warn", msg);
  },

  logErrorFn: function (msg) {
    console.log("error", msg);
  },

  missingKeyFn: function (locale, value) {
    return value;
  },

  mustacheConfig: {
    tags: ["{{", "}}"],
    disable: false
  }
});

/**
 * Client Events
 */
client.on("ready", () => {
  console.log(`${client.user.username} ready!`);

client.user.setActivity(`Type: ${PREFIX}help ${PREFIX}PLAY(p)| ${client.guilds.cache.size} Server,Users ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)},`, { type: "PLAYING"});

});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);

/**
 * Import all commands
 */
const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        i18n.__mf("common.cooldownMessage", { time: timeLeft.toFixed(1), name: command.name })
      );
    }
  }


  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply(i18n.__("common.errorCommend")).catch(console.error);
  }
});
//////////


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
