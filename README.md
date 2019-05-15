# jss-react

JSS reset styles.

## Usage

Install:
```
yarn add --dev jss-reset
```

Apply (1st method):
```
// in your index.js
import { jss } from 'react-jss';
import reset from 'jss-reset';

jss.createStyleSheet(reset).attach();
```

Apply (2st method):
```
// in your theme.js
import reset from 'jss-reset';

const theme = {
    ...reset,
    // your theme variables
}
```