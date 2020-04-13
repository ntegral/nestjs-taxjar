import { DynamicModule } from '@nestjs/common';
import { TaxJarConfigAsyncOptions, TaxJarConfigOptions } from './common/interfaces';
export declare class TaxJarModule {
    static forRoot(options: TaxJarConfigOptions): DynamicModule;
    static forRootAsync(options: TaxJarConfigAsyncOptions): DynamicModule;
}
