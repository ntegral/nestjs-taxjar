import { Inject } from '@nestjs/common';
import { TAXJAR_TOKEN } from './taxjar.constants';

export function InjectTaxJar() {
    return Inject(TAXJAR_TOKEN);
}
