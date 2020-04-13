import { TaxJarConfigOptions } from '../common/interfaces';
import { TAXJAR_TOKEN, createTaxJarClient } from '../common';

export function createTaxJarProviders(options: TaxJarConfigOptions) {
    return {
        provide: TAXJAR_TOKEN,
        useValue: createTaxJarClient(options),
    };
}
