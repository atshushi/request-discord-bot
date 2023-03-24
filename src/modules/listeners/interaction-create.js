import { Listener } from '../../domain/listener.js';
import { Context } from '../../main/discord-client/entities/context.js';

export default class extends Listener {
  constructor(client) {
    super(client, {
      name: 'INTERACTION_CREATE',
    });
  }

  override(interaction) {
    // eslint-disable-next-line no-useless-return
    if (interaction.type !== 2) return;

    const command = this.client.commands.find((c) => c.name === interaction.data.name);
    if (command) command.override(new Context(this.client, interaction));
  }
}
