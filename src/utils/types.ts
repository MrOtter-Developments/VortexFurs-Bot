import { ApplicationCommandOptionChoice, CommandOptionDataTypeResolvable, PermissionFlags } from "discord.js";

export interface ICommandOptions {
	args?: ICommandArgsOptions[];
	cooldown?: number;
	extendedDescription?: string;
	group?: string;
	name: string;
	ownerOnly?: boolean;
	runIn?: 'both' | 'dms' | 'servers';
	shortDescription: string;
	usage?: string;
    userPermissions: Array<keyof PermissionFlags>
    botPermissions: Array<keyof PermissionFlags>
}

export interface ICommandArgsOptions {
	choices?: ApplicationCommandOptionChoice[];
	description: string;
	name: string;
	options?: ICommandArgsOptions[];
	required?: boolean;
	type: CommandOptionDataTypeResolvable;
}