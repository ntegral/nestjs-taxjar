import { TaxJarConfigOptions } from '../common/interfaces';
export declare function createTaxJarProviders(options: TaxJarConfigOptions): {
    provide: string;
    useValue: import("taxjar");
};
