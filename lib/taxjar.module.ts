import { DynamicModule, Module } from '@nestjs/common';

import { TaxJarCoreModule } from './taxjar-core.module';
import {
    TaxJarConfigAsyncOptions,
    TaxJarConfigOptions,
} from './common/interfaces';

@Module({})
export class TaxJarModule {
    public static forRoot(options: TaxJarConfigOptions): DynamicModule {
        return {
            module: TaxJarModule,
            imports: [
                TaxJarCoreModule.forRoot(options as TaxJarConfigOptions),
            ],
        };
    }

    public static forRootAsync(
        options: TaxJarConfigAsyncOptions,
    ): DynamicModule {
        return {
            module: TaxJarModule,
            imports: [TaxJarCoreModule.forRootAsync(options)],
        };
    }
}
