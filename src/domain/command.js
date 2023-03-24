export class Command {
  constructor(client, data) {
    Object.assign(this, data);

    this.client = client;
  }
}
