// @ts-check
const config = require("../config");
const CosmosClient = require("@azure/cosmos").CosmosClient;
const { endpoint, key, databaseId, containerId } = config;

const EnrollmentDAO = {
  async init() {
    /**
     * Create the database if it does not exist
     */
    this.client = new CosmosClient({ endpoint, key });

    const { database } = await this.client.databases.createIfNotExists({
      id: databaseId,
    });
    this.database = database;
    console.log(`Created database:\n${database.id}\n`);

    /**
     * Create the container if it does not exist
     */
    const { container } = await this.client
      .database(databaseId)
      .containers.createIfNotExists({ id: containerId });
    this.container = container;
    console.log(`Created container:\n${container.id}\n`);
    return this;
  },
  async saveEnrollment(req, res) {
    const item = req.body;
    const container = this.container;
    var date = new Date();
    var timestamp = Math.floor(date.getTime() / 1000.0);
    item.date = timestamp;
    await container.items.create(item);
    res.send({ success: true });
  },
};
module.exports = EnrollmentDAO;
