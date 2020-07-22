const config = require("../config");
const CosmosClient = require("@azure/cosmos").CosmosClient;
const { endpoint, key, databaseId, containerId } = config;

// todo : make it factory function.
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
  async find(querySpec, container) {
    if (!container) {
      throw new Error("Collection is not initialized.");
    }
    const { resources } = await container.items.query(querySpec).fetchAll();

    return resources;
  },
  async getItemById(itemId, container) {
    const querySpec = {
      query: "SELECT * from c WHERE c.id = @id",
      parameters: [
        {
          name: "@id",
          value: itemId,
        },
      ],
    };
    const results = await this.find(querySpec, container);
    const item = results[0];
    return item;
  },
  async getItem(itemId, container) {
    const querySpec = {
      query: "SELECT * from c WHERE c._id = @id",
      parameters: [
        {
          name: "@id",
          value: itemId,
        },
      ],
    };
    const results = await this.find(querySpec, container);
    const item = results[0];
    return item;
  },
  async getEnrollmentId(req, res) {
    const id = req.query.id;
    let item = await this.getItem(id, this.container);
    res.send({ id: item.id });
  },
  async saveEnrollment(req, res) {
    const item = req.body;
    const container = this.container;
    var date = new Date();
    var timestamp = Math.floor(date.getTime() / 1000.0);
    item.date = timestamp;
    const doc = await this.getItemById(item.id, container);
    if (doc) {
      await container.item(item.id).replace(item);
    } else {
      await container.items.create(item);
    }
    res.send(item);
  },
};
module.exports = EnrollmentDAO;
