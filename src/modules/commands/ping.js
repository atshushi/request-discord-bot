import { Command } from '../../domain/command.js';

export default class extends Command {
  constructor(client) {
    super(client, {
      name: 'ping',
      description: 'See the latency',
    });
  }

  override(context) {
    context.respond({ content: 'Pong!' });
  }
}
