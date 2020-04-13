import { Global, Module, DynamicModule, Provider, Type } from '@nestjs/common';
import { createTaxJarProviders } from './providers';
import {
    TaxJarConfigOptions,
    TaxJarConfigAsyncOptions,
    TaxJarConfigOptionsFactory,
} from './common/interfaces';
import {
    TAXJAR_MODULE_OPTIONS,
    TAXJAR_TOKEN,
    createTaxJarClient,
} from './common';

@Global()
@Module({})
export class TaxJarCoreModule {
    public static forRoot(options: TaxJarConfigOptions): DynamicModule {
        const provider = createTaxJarProviders(options);

        return {
            exports: [provider],
            module: TaxJarCoreModule,
            providers: [provider],
        };
    }

    public static forRootAsync(
        options: TaxJarConfigAsyncOptions,
    ): DynamicModule {
        const provider: Provider = {
            inject: [TAXJAR_MODULE_OPTIONS],
            provide: TAXJAR_TOKEN,
            useFactory: (options: TaxJarConfigOptions) =>
                createTaxJarClient(options),
        };

        return {
            exports: [provider],
            imports: options.imports,
            module: TaxJarCoreModule,
            providers: [...this.createAsyncProviders(options), provider],
        };
    }

    private static createAsyncProviders(
        options: TaxJarConfigAsyncOptions,
    ): Provider[] {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        const useClass = options.useClass as Type<TaxJarConfigOptionsFactory>;
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: useClass,
                useClass,
            },
        ];
    }

    private static createAsyncOptionsProvider(
        options: TaxJarConfigAsyncOptions,
    ): Provider {
        if (options.useFactory) {
            return {
                inject: options.inject || [],
                provide: TAXJAR_MODULE_OPTIONS,
                useFactory: options.useFactory,
            };
        }
        const inject = [
            (options.useClass || options.useExisting) as Type<
                TaxJarConfigOptionsFactory
            >,
        ];
        return {
            provide: TAXJAR_MODULE_OPTIONS,
            useFactory: async (optionsFactory: TaxJarConfigOptionsFactory) =>
                await optionsFactory.createTaxJarConfigOptions(),
            inject,
        };
    }
}
