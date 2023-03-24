import { Listener } from '../../domain/listener.js';

export default class extends Listener {
  constructor(client) {
    super(client, {
      name: 'READY',
    });
  }

  override(user) {
    this.client.user = user;
    this.client.commands.map((command) => {
      this.client.request(
        this.client.endpoints.GUILD_COMMANDS(this.client.user.id, '829801187884269599'),
        {
          name: command.name,
          description: command.description,
        },
        'POST',
      );
    });

    console.log('Client Started');
  }
}
