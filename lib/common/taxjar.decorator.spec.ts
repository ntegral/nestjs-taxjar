import { TaxJarConfigOptions } from "./interfaces";
import { TestingModule, Test } from "@nestjs/testing";
import { Injectable } from "@nestjs/common";
import { InjectTaxJar } from "./taxjar.decorator";
import { TaxJarModule } from "../taxjar.module";
import Taxjar = require("taxjar");


describe('InjectTaxJar', () => {

    let config: TaxJarConfigOptions = {
        apiKey: '9e0cd62a22f451701f29c3bde214'
    }
    let module: TestingModule;

    @Injectable()
    class InjectableService {
        public constructor(@InjectTaxJar() public readonly client: Taxjar) {}
    }

    beforeEach(async () => {
        module = await Test.createTestingModule({
            imports: [TaxJarModule.forRoot(config)],
            providers: [InjectableService],
        }).compile();
    });

    describe('when decorating a class constructor parameter', () => {
        it('should inject the taxjar client', () => {
            const testService = module.get(InjectableService);
            // console.log('taxjar client', testService);
            expect(testService).toHaveProperty('client');
            expect(testService.client).toBeInstanceOf(Taxjar);
        });
    });
})