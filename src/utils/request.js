import { endpoints } from './discord-endpoints';

export const request = (path, data = {}, method = 'GET') => {
  const response = fetch(`${endpoints.CLIENT_URL}${endpoints.BASE_URL}${path}`, {
    method,
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.body) return null;
  return response.json();
};
