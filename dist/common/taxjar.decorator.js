"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const taxjar_constants_1 = require("./taxjar.constants");
function InjectTaxJar() {
    return common_1.Inject(taxjar_constants_1.TAXJAR_TOKEN);
}
exports.InjectTaxJar = InjectTaxJar;
