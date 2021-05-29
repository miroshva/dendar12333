const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "add",
  description: i18n.__('invite.description'),
  execute(message) {
    return message.member
      .send(
        `[  Click here  ](https://discord.com/oauth2/authorize?client_id=784303756925468713&permissions=70282305&scope=bot)***invite to pore bot***
    `
      )
      message.channel.send();
  }
};
