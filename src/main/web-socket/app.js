import Webscoket from 'ws';
import { handleEvent } from './adapters/event-adapter.js';

export const app = new Webscoket('wss://gateway.discord.gg/?v=10&encoding=json')
  .on('open', () => app.send(JSON.stringify({
    op: 2,
    d: {
      token: process.env.DISCORD_TOKEN,
      intents: 33283,
      presence: {},
      properties: {
        os: process.platform,
      },
    },
  })))
  .on('message', (message) => {
    const payload = JSON.parse(message.toString());

    switch (payload.op) {
      case 10:
        setInterval(() => app.send(JSON.stringify({ op: 1, d: null })), payload.d.heartbeat_interval);
        break;
      case 0:
        handleEvent(payload);
    }
  });
