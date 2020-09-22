const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '<';

client.once('ready', () => {
    console.log('Ready To Test');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    }
    else if(command == 'test'){
        message.channel.send('test successful');
    }
    else if(command == 'user'){
        message.author.send('test successful');
    }
    else if(command == 'GPN'){
        message.channel.send('https://discord.gg/q7RtGFP');
    }
});

client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
        case 'PlayerInfo':
            const embed = new Discord.MessageEmbed()
            .setTitle('User Info')
            .addField (':thumbsup:', ':thumbsup:')
            .addField('Player Name', message.author.username)
            .addField('Version', '2.4.7')
            .addField('Current Server', message.guild.name)
            
            message.channel.send(embed);
        break;


    }
})

client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
        case 'links':
            const embed = new Discord.MessageEmbed()
            .setTitle('Links')
            .addField('GPN Server:', 'https://discord.gg/q7RtGFP')
            .addField('Chill Server', 'https://discord.gg/u8b4aUG')
            .addField('Mostly Ghostly Minecraft Server', 'https://discord.gg/uZr2p7h')
            .addField('Channel Links', 'Mine And Others')
            .addField('Mostly Ghostly', 'https://www.youtube.com/channel/UC86E0GqryxO41XnWJiqMD5A?view_as=subscriber')
            .addField('Gaming Players Network', 'https://www.youtube.com/channel/UCFTVyMOBnP09GQ2YFlUW3Ng')
            .addField('LagonGaming', 'https://www.youtube.com/channel/UCFFX-Zep8DQHf040zASCVYw')
            .addField('Exile Visionz', 'https://www.youtube.com/user/kendalldavidson')
            .addField('TheKingOfGames', 'https://www.youtube.com/user/eddiedavidson2009')
            .setColor('#00FFF2')

            message.channel.send(embed);
        break;
    }

})




client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
        case 'ServerInfo':
            const embed = new Discord.MessageEmbed()
            .setTitle('Server Info & More')
            .addField('This Server Info', message.guild.name)
            .addField('Version', '2.4.7')
            .addField('Partnering Server','Gaming Players Network')
            .addField('Invite Link', 'https://discord.gg/q7RtGFP')

            message.channel.send(embed);
        break;
    }

})


client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
        case 'kick':
            if(!args[1]) message.channel.send('You Need To Specify A Person!')

            const User = message.mentions.users.first();

            if(User){
                const Member = member.guild.member(User);

                if(member){
                    member.kick('You Were Kicked By A Admin').then(() =>{
                        message.reply(`Successfully kicked ${User.tag}`);
                    }).catch(err =>{
                        message.reply('I Was Unable To Kick The Member')
                        console.log(err);
                    });
                } else{
                    message.reply("That User Isn\'t In This Guild")
                }

            } else {
                message.reply('that user isn\'t in the guild');
            }
        break;
    }
})






client.login(process.env.BOT_TOKEN);
