import { TaxJarConfigOptions } from './interfaces';
import Taxjar = require('taxjar');

export function createTaxJarClient(options: TaxJarConfigOptions) {
    const client = new Taxjar(options);
    return client;
}
