#####Author
This was created by [Benjamin Thaw](https://github.com/bthaw2018 "Benjamin Thaw").

## About
This bot can send messages to a user or in a channel whenever a command is executed.

##Installation and Running the Bot
1. Make sure you have [NodeJS installed](https://nodejs.org/en/download/).
2. Download this repository into a folder on your computer or VM.
3. Open terminal or command prompt, and change directories to the location of the folder (with `cd`).
4. Configure the bot under [Initial Configuration](#initial-configuration)
5. **Start the bot with `node bot.js`.**

##Initial Configuration
1. Rename `config-ex.json` to `config.json.
2. Go to https://discordapp.com/developers/applications
3. Sign in,  click "New Application", and enter a name.
4. Click "BOT" on the left menu, hit "Add Bot", and click "Yes, do it!".
5. Under "Token", click "Copy".
6. Replace `TOKEN_GOES_HERE` in `config.json` with the token that you copied.
7. Enter the ID of the channel to send the message in (see [here](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID- "here") to learn how to obtain channel IDs). Check out the [Customize](#customize) section to change what the bot does.

##Customize
You can choose whether to send a message in a specified channel, send a DM to another user, or send a message in a channel AND send a DM whenever a command is used. 

By default, the bot will only send a message in the channel specified by `"channelId"`. 

You can have none, one, or both options enabled. To enable/disable one or more options, see below.
####Sending a message in a channel
To **enable**:
1. Open `config.json`.
2. Change the value of `"sendToChannel"` to `true`.
3. Change the value of `"channelIId"` to the [channel ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID- "here") (*Note: not the channel name*).

To **disable**:
1. Open `config.json`.
2. Change the value of `"sendToChannel"` to `false`.

####Sending a DM to a user
To **enable**:
1. Open `config.json`.
2. Change the value of `"dmToUser"` to `true`.
3. Change the value of `"userId"` to the [User ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID- "here") (*Note: not the user's name/tag*).

To **disable**:
1. Open `config.json`.
2. Change the value of `"dmToUser"` to `false`.

