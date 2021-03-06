import { CommandInteraction, MessageEmbed } from "discord.js";
import FuzzyClient from "../../lib/FuzzyClient";
import BaseCommand from "../../structures/BaseCommand";

export default class KissCommand extends BaseCommand {
    constructor(client: FuzzyClient) {
        super(client, {
            name: "kiss",
            shortDescription: "Kiss a member!",
            type: "CHAT_INPUT",
            userPermissions: [],
            botPermissions: [],
            args: [
                {
                    name: "target",
                    description: "Member you want to kiss",
                    type: "USER",
                    required: true,
                },
            ],
            cooldown: 1000,
        });
    }
    async run(interaction: CommandInteraction) {
        const target = await interaction.options.getMember("target", true);
        this.client.furryAPI.furry.kiss("json", 1).then((img) => {
            const embed = new MessageEmbed()
                .setAuthor(`${interaction.user.username}`, `${interaction.user.displayAvatarURL({ dynamic: true })}`)
                .setImage(img.url)
                .setColor("#ff1493")
                .setTimestamp()
                .setFooter(
                    `User ID: ${interaction.user.id} | Artist: ${
                        img.artists.length > 0 ? img.artists.join(", ") : "Unknown"
                    }`,
                );
            interaction.reply({ embeds: [embed], content: `OwO ${interaction.user} Kissed ${target}!` });
        });
    }
}
