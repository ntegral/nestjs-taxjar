import { Test } from '@nestjs/testing';
import { TaxJarModule } from './taxjar.module';
import {
    TaxJarConfigOptions,
    TaxJarConfigOptionsFactory,
} from './common/interfaces';
import Taxjar = require('taxjar');
import { TAXJAR_TOKEN } from './common';

describe('TaxJarModule', () => {
    let config: TaxJarConfigOptions = {
        apiKey: '9e0cd62a22f451701f29c3bde214',
    };

    class TestService implements TaxJarConfigOptionsFactory {
        createTaxJarConfigOptions(): TaxJarConfigOptions {
            return config;
        }
    }

    describe('forRoot 1.0', () => {
        it('should provide the taxjar client', async () => {
            const mod = await Test.createTestingModule({
                imports: [TaxJarModule.forRoot(config)],
            }).compile();

            const client = mod.get<Taxjar>(TAXJAR_TOKEN);
            expect(client).toBeDefined();
            expect(client).toBeInstanceOf(Taxjar);
        });
    });

    describe('forRootAsync 1.0', () => {
        describe('when the `useFactory` option is used', () => {
            it('should provide the taxjar client', async () => {
                const mod = await Test.createTestingModule({
                    imports: [
                        TaxJarModule.forRootAsync({
                            useFactory: () => config,
                        }),
                    ],
                }).compile();

                const client = mod.get<Taxjar>(TAXJAR_TOKEN);
                expect(client).toBeDefined();
                expect(client).toBeInstanceOf(Taxjar);
            });
        });
    });

    describe('when the `useClass` option is used', () => {
        it('should provide the taxjar client', async () => {
            const mod = await Test.createTestingModule({
                imports: [
                    TaxJarModule.forRootAsync({
                        useClass: TestService,
                    }),
                ],
            }).compile();

            const client = mod.get<Taxjar>(TAXJAR_TOKEN);
            expect(client).toBeDefined();
            expect(client).toBeInstanceOf(Taxjar);
        });
    });

    describe('forRoot', () => {
        it('should be DynamicModule', () => {
            const dynamicModule = TaxJarModule.forRoot(config);

            expect(dynamicModule).toBeDefined();
        });

        it('should be DynamicModule', () => {
            const dynamicModule = TaxJarModule.forRootAsync({
                useFactory: () => config,
            });

            expect(dynamicModule).toBeDefined();
        });
    });
});
