"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
function createTaxJarProviders(options) {
    return {
        provide: common_1.TAXJAR_TOKEN,
        useValue: common_1.createTaxJarClient(options),
    };
}
exports.createTaxJarProviders = createTaxJarProviders;
