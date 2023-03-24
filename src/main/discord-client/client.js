import { DiscordClient } from '../../domain/discord-client.js';
import { app } from '../web-socket/app.js';

export const client = new DiscordClient(app);
