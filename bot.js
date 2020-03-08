const Discord = require("discord.js")
const client = new Discord.Client();
const config = require("./config.json");


client.on('ready', (...args) => {
    var s = "s";
    console.log(`Serving: `);
    console.log(`  ${client.guilds.cache.size} servers`);
    console.log(`  ${client.channels.cache.size} channels`);
    console.log(`  ${client.users.cache.size} users`);

    console.log(`\nServers: `);
    client.guilds.cache.forEach(guild => {
        console.log(`  - ${guild.name} (ID: ${guild.id})`);
    })

    console.log(`\nBot Info:`)
    console.log(`  Tag: ${client.user.tag}`);
    console.log("\nPress Ctrl + C to Quit\n");
})

client.on('message', message => {
    //check if message starts with prefix in config
    if (message.content.indexOf(config.prefix) !== 0) return;

    //seperate the prefix, comamnd, and arguments
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    //put together args cause right now its an array
    var argsContent = args.join(' ');

    //check if command is the command in the config
    if (command != config.command) return;

    //just send args in requested channels/DMs

    var message = `**${message.author.tag} (<@${message.author.id}>)** has inquired about: ${argsContent}`;

    if (config.sendToChannel) {
        if (config.channelId == "" || config.channelId == undefined) {
            console.log(`Error: Missing Channel ID`);
        }

        client.channels.fetch(config.channelId)
            .then(channel => {
                channel.send(message)
                    .catch(e => console.error(`Error sending message in channel: ${e.message}`));
            })
            .catch(e => {
                console.error(`Could not find channel: ${e.message}`);
            })

    }

    if (config.dmToUser) {
        if (config.userId == "" || config.userId == undefined) {
            console.log(`Error: Missing User ID`);
        }

        client.users.fetch(config.userId)
            .then(user => {
                user.send(message)
                    .catch(e => console.error(`Error sending message to user: ${e.message}`));
            })
            .catch(e => {
                console.error(`Could not find user: ${e.message}`);
            })

    }

});

client.login(config.token);