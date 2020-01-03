# jss-reset

JSS reset styles.
The global export in `index.js` is generated with `yarn build` which does:
```bash
jss convert src/index.css -f js -e es6 > src/index.js
```

## Usage

Install:
```
yarn add --dev jss-reset
```

Usage:
```
import { jss } from 'react-jss';
import reset from 'jss-reset';

jss.createStyleSheet(reset).attach();
```
