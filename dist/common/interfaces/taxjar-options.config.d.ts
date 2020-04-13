import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
export interface TaxJarConfigOptions {
    apiKey: string;
    apiUrl?: string;
    headers?: object;
}
export interface TaxJarConfigOptionsFactory {
    createTaxJarConfigOptions(): Promise<TaxJarConfigOptions> | TaxJarConfigOptions;
}
export interface TaxJarConfigAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useClass?: Type<TaxJarConfigOptionsFactory>;
    useExisting?: Type<TaxJarConfigOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<TaxJarConfigOptions> | TaxJarConfigOptions;
}
