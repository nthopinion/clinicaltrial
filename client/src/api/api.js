/*eslint no-undef: "off"*/
/*eslint no-unused-vars: "off"*/
import store from "store";
import VeridaApp from "../verida-datastore";
const _ = require("lodash");

/**
 * Specify the localStorage key for tracking if a user is logged in
 */
const LOGGEDIN_KEY = "NTHOPINION_CLINICAL_TRIAL";

/**
 * Load Verida configuration from process.env
 */
const { REACT_APP_VERIDA_APP_NAME, REACT_APP_VERIDA_APP_ENVIRONMENT } = process.env;
VeridaApp.setConfig({
  appName: REACT_APP_VERIDA_APP_NAME,
  environment: REACT_APP_VERIDA_APP_ENVIRONMENT
});

/**
 * If running on testnet, modify the schema paths to load from localhost
 */
VeridaApp.setConfig({
  servers: {
    testnet: {
      schemaPaths: {
        "https://clinicaltrial.nthopinion.com/": "http://localhost:3000/schemas/"
      }
    }
  }
});

/**
 * Map friendly datastore names to full schema paths.
 * 
 * Used by `api.openDatastore()`
 */
const datastoreMap = {
  "enrolment": "https://clinicaltrial.nthopinion.com/enrolment/schema.json",
  "dailyVisit": "https://clinicaltrial.nthopinion.com/dailyVisit/schema.json"
}

class Api {

  constructor() {
    this.web3Provider = null;
    this.address = null;

    this.api = null;
    this.connected = false;
    this.errors = null;
    this.datastores = {};
  }

  /**
   * Connect a user's metamask account (login)
   *
   * @returns {boolean} True if connected, False if user cancelled
   * @throws {Exception} if metamask not found
   */
  async connect(forced = true) {
    this.web3Provider = await VeridaApp.Helpers.wallet.connectWeb3("ethr");
    this.address = await VeridaApp.Helpers.wallet.getAddress("ethr");

    this.api = new VeridaApp({
      chain: "ethr",
      address: this.address,
      web3Provider: this.web3Provider
    });

    this.connected = await this.api.connect(forced);
    store.set(LOGGEDIN_KEY, true);

    return this.connected;
  }

  /**
   * Automatically log the user in if they have a valid session in Localstorage
   */
  async autoLogin() {
    if (this.connected) {
      return true;
    }

    let loggedIn = store.get(LOGGEDIN_KEY);
    if (loggedIn) {
      // User is logged in, so connect their account
      await this.connect();
      return true;
    }

    return false;
  }

  disconnect() {
    // this.checkConnected();
    this.api.disconnect();
    this.api = null;
    this.connected = false;
    store.set(LOGGEDIN_KEY, false);
  }

  async openDatastore(name) {
    if (!this.connected) {
      throw new Error("Not connected");
    }

    if (!datastoreMap[name]) {
      throw new Error("Invalid datastore requested");
    }

    if (!this.datastores[name]) {
      // Open a private, encrypted datastore of the requested type
      this.datastores[name] = await this.api.openDatastore(datastoreMap[name]);
    }

    return this.datastores[name];
  }

  async getSpecification(name) {
    if (!datastoreMap[name]) {
      throw new Error("Invalid datastore requested");
    }

    let schema = await VeridaApp.getSchema(datastoreMap[name]);
    return schema.getSpecification();
  }

  async getConnection() {
    if (!this.connected) {
      throw new Error("User isn't connected");
    }

    return this.api;
  }
}

let api = new Api();
export default api;
