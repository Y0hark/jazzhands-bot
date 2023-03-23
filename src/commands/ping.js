const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pin')
		.setDescription('Replies with Pong! And check the latency.'),
	async execute(interaction) {
		const beforeReply = Date.now();
		const responseEmbed = new EmbedBuilder()
			.setTitle('Pong!  🏓')
			.setDescription('Checking latency... ⏳')
			.setColor('#0099ff');
		await interaction.reply({embeds: [responseEmbed], ephemeral: true});
		const afterReply = Date.now();
		responseEmbed.setDescription(`Latency is ${afterReply - beforeReply}ms. :stopwatch:`);
		await interaction.editReply({embeds: [responseEmbed]});
	},
};