import { DynamicModule } from '@nestjs/common';
import { TaxJarConfigOptions, TaxJarConfigAsyncOptions } from './common/interfaces';
export declare class TaxJarCoreModule {
    static forRoot(options: TaxJarConfigOptions): DynamicModule;
    static forRootAsync(options: TaxJarConfigAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
