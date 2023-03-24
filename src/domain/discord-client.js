import events from 'events';

import { endpoints } from '../utils/discord-endpoints.js';
import { readFolder } from '../utils/read-files.js';
import { request } from '../utils/request.js';

export class DiscordClient extends events {
  constructor(app) {
    super();

    this.app = app;
    this.endpoints = endpoints;
    this.request = request;

    this.commands = [];
  }

  async load() {
    const commands = await readFolder('./src/modules/commands');
    const events = await readFolder('./src/modules/listeners');

    this.commands = commands
      .map((Command) => new Command.default(this));

    events.map((Event) => {
      const event = new Event.default(this);
      this.on(event.name, (...args) => event.override(...args));
    });
  }
}
