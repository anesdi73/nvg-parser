# nvg-parser

An nvg parser in TypeScript

Based in the previous work done at https://github.com/spatialillusions/nvg (Thanks!!)

## Installation

```sh
npm install nvg-parser --save
yarn add nvg-parser
bower install nvg-parser --save
```

## Usage

### TypeScript

```typescript
import NVGParser from 'nvg-parser';
const xml = `<?xml version="1.0" encoding="UTF-8"?>
		<nvg version="2.0.2" classification="NOT CLASSIFIED" xmlns="https://tide.act.nato.int/schemas/2012/10/nvg">
		<text x="65.042489747736" y="32.23745768948515" rotation="45" uri="urn:int:000040">
		<content>These aren't the droids you're looking for</content>
		</text>
        </nvg>`;
const nvgParser = new NVGParser();
const nvgObject = nvgParser.parse(xml);
console.log(nvgObject.version);
```

```sh
Output should be '2.0.2'
```

## Test

```sh
npm run test
```

## Additional notes

NVG types definition file (nvg.data.2.0.d.ts) generated with json-schema-to-typescript@6.1.3 (later version generated typescript code not compatible with typescript 2.9.2) from (nvg.data.2.0.xsd + nvg.types.2.0.xsd)
This library version was developed to be compatible with Angular 6 so the maximum possible version of Typescript is 2.9.2
