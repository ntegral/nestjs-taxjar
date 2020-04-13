"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Taxjar = require("taxjar");
function createTaxJarClient(options) {
    const client = new Taxjar(options);
    return client;
}
exports.createTaxJarClient = createTaxJarClient;
