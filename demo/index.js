import preset from 'jss-preset-default';
import jss from 'jss';
import font from 'typeface-source-sans-pro/files/source-sans-pro-latin-400.woff2';

import { reset, typography } from '../src';

jss.setup(preset());

jss.createStyleSheet(reset).attach();
jss.createStyleSheet(typography).attach();

jss.createStyleSheet({
    '@global body': {
        fontFamily: 'Source Sans Pro, sans-serif',
        width: 1140,
        maxWidth: '100%',
        margin: '0 auto',
        padding: 25,
    },
    '@font-face': [{
        fontFamily: 'Source Sans Pro',
        fontWeight: 'normal',
        fontStyle: 'normal',
        src: `url(${font}) format('woff2')`,
    }],
}).attach();
