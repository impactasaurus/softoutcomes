import { injectGlobal } from 'styled-components';
import styledReset from 'styled-reset';

export default () => injectGlobal`
    @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300italic,400,400italic");
    ${styledReset}

    * {
        box-sizing: border-box;
    }
`;