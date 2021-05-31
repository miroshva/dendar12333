
client.on("message", hr => {
  if (hr.content.startsWith(prefix + "delete")) {
    var haider = hr.channel.delete();

if(!hr.member.hasPermission('MANAGE_CHANNELS')) return hr.reply(' ** You dont have MANAGE_CHANNELS permission **');
 
    hr.channel.send(`channel : ${haider}`)
  }
});
