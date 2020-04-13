[![npm version](http://img.shields.io/npm/v/@ntegral/nestjs-taxjar.svg?style=flat)](https://npmjs.org/package/@ntegral/nestjs-taxjar "View this project on npm")
[![Codecov Coverage](https://img.shields.io/codecov/c/github/ntegral/nestjs-taxjar/master.svg?style=flat-square)](https://codecov.io/gh/ntegral/nestjs-taxjar)
[![ISC license](http://img.shields.io/badge/license-ISC-brightgreen.svg)](http://opensource.org/licenses/ISC)

<p align="center">
  <h3 align="center">
    @ntegral/nestjs-taxjar
  </h3>

  <p align="center">
    Provides an injectable taxjar client to provide access to taxjar sales tax api in nestjs modules
  </p>
</p>

## Table Of Contents

- [About](#about)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About

`@ntegral/nestjs-taxjar` implements a module, `TaxJarModule`, which when imported into
your nestjs project provides a Taxjar client to any class that injects it. This
lets TaxJar Sales Tax API be worked into your dependency injection workflow without having to
do any extra work outside of the initial setup.

## Installation

```bash
npm install --save @ntegral/nestjs-taxjar taxjar
```

## Getting Started

The simplest way to use `@ntegral/nestjs-taxjar` is to use `TaxJarModule.forRoot`

```typescript
import { Module } from '@nestjs-common';
import { TaxJarModule } from '@ntegral/nestjs-taxjar';

@Module({
  imports: [
    TaxJarModule.forRoot({
      apiKey: 'taxjar_api_key'
    }),
  ],
})
export class AppModule {}
```

The async way `@ntegral/nestjs-taxjar` is to use `TaxJarModule.forRootAsync`

```typescript
import { Module } from '@nestjs-common';
import { TaxJarModule } from '@ntegral/nestjs-taxjar';
import { ConfigModule } from '@ntegral/nestjs-config';
import { ConfigService } from '@ntegral/nestjs-config';

@Module({
  imports: [
    TaxJarModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (cfg:ConfigService) => ({
        apiKey: cfg.get('TAXJAR_API_KEY')
      }),
      inject: [ConfigService],
    })
  ]
})

export class AppModule {}
```

You can then inject the Taxjar client into any of your injectables by using a
custom decorator

```typescript
import { Injectable } from '@nestjs/common';
import { InjectTaxJar } from '@ntegral/nestjs-taxjar';
import Taxjar = require('taxjar');

@Injectable()
export class AppService {
  public constructor(@InjectTaxJar() private readonly client: Taxjar) {
      client.ratesForLocation('30339').then(res => {
        res.rate; //rate object
      });
      ... and more
  }
}
```

## Contributing

I would greatly appreciate any contributions to make this project better. Please
make sure to follow the below guidelines before getting your hands dirty.

1. Fork the repository
2. Create your branch (`git checkout -b my-branch`)
3. Commit any changes to your branch
4. Push your changes to your remote branch
5. Open a pull request

## License

Distributed under the ISC License. See `LICENSE` for more information.

## Acknowledgements

- [nestjs](https://nestjs.com)
- [taxjar](https://github.com/taxjar/taxjar-node)

Copyright &copy; 2020 Ntegral Inc.
