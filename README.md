# jss-react

JSS reset styles.

## Usage
Install:
```
yarn add --dev jss-reset
```
Import and apply:
```
import { jss } from 'react-jss';
import reset from 'jss-reset';

jss.createStyleSheet(reset).attach();
```