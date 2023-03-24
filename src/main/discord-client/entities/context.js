export class Context {
  constructor(client, interaction) {
    this.client = client;
    this.interaction = interaction;
  }

  respond(data) {
    this.client.request(
      this.client.endpoints.INTERACTION_RESPOND(this.interaction.id, this.interaction.token),
      {
        type: 4,
        data,
      },
      'POST',
    );
  }
}
