import { css } from 'styled-components';
import Themes from '../../../../Assets/Styles/Themes';
import breakpoint from 'styled-components-breakpoint';

const BigTitle = css`
    text-align:center;
    font-size:${Themes.fontsize.h2};
    line-height:40px;
    font-weight:${Themes.fontWeight.black};
    color:${Themes.colors.black};
        ${breakpoint('md')`
        font-size:${Themes.fontsize.h1};
        `}
        ${breakpoint('lg')`
        font-size:${Themes.fontsize.h1};
        line-height:50px;
        `}
`
export default BigTitle;