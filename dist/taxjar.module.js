"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TaxJarModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const taxjar_core_module_1 = require("./taxjar-core.module");
let TaxJarModule = TaxJarModule_1 = class TaxJarModule {
    static forRoot(options) {
        return {
            module: TaxJarModule_1,
            imports: [
                taxjar_core_module_1.TaxJarCoreModule.forRoot(options),
            ],
        };
    }
    static forRootAsync(options) {
        return {
            module: TaxJarModule_1,
            imports: [taxjar_core_module_1.TaxJarCoreModule.forRootAsync(options)],
        };
    }
};
TaxJarModule = TaxJarModule_1 = __decorate([
    common_1.Module({})
], TaxJarModule);
exports.TaxJarModule = TaxJarModule;
