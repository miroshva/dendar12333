const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "ping",
  cooldown: 10,
  description: i18n.__("ping.description"),
  execute(message) {
    message
       message.react("<a:emoji_29:847407497941614603>")
      .reply(i18n.__mf("ping.result", { ping: Math.round(message.client.ws.ping) }))
      .catch(console.error);
  }
};
