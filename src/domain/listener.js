export class Listener {
  constructor(client, data) {
    this.client = client;
    this.name = data.name;
  }
}
