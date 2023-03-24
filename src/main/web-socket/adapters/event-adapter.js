import { client } from '../../discord-client/client.js';

export const handleEvent = ({ d, t }) => client.emit(t, d);
