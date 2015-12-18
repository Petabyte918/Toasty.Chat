var mute = function(bot, sender, args, data, client)
{
	if (args[0] != '')
		bot.chatServerBase.handleCommand('mute', client, args);
	else
		bot.sendClient("Usage is '!mute [name]'", client);
};

var kick = function(bot, sender, args, data, client)
{
	if (args[0] != '')
		bot.chatServerBase.handleCommand('kick', client, args);
	else
		bot.sendClient("Usage is '!kick [name]'", client);
};

var ban = function(bot, sender, args, data, client)
{
	console.log('ban');
	if (args[0] != '')
		bot.chatServerBase.handleCommand('ban', client, args);
	else
		bot.sendClient("Usage is '!ban [name] <time>' default time is 60 seconds", client);
};

var hide = function(bot, sender, args, data, client)
{
	bot.sendClient("This command is not in use yet");
	// if (typeof client.hidden === 'undefined' || !client.hidden) {
	// 	bot.chatServerBase.removeClientFromChannel(client.channel, client);
	// 	client.hidden = true;
	// }
	// else {
	// 	bot.chatServerBase.addClientToChannel(channel, client, nick, trip);
	// 	client.hidden = false;
	// }
};


module.exports =
{
	mute: mute,
	kick: kick,
	ban: ban,
	hide: hide
};
