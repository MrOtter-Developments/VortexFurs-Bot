import FuzzyClient from "../lib/FuzzyClient";
import BaseEvent from "../structures/BaseEvent";

export default class MemberCreateEvent extends BaseEvent {
	constructor(client: FuzzyClient) {
		super(client, {
			eventName: "debug",
		});
	}
	async run(client: FuzzyClient, debugMsg: string) {
		console.log(debugMsg)
	}
}
