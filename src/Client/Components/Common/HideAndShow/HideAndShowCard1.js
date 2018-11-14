import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import Themes from '../../../../Assets/Styles/Themes';

//Components
import MintSpan from '../../Common/MintSpan';
import BigTitle from '../../Common/Title/BigTitle';

class HideAndShowCard1 extends Component {
    render(){
        return(
            <Container>
                <Section02__Title>How we can help</Section02__Title>    
                <MintSpan />
                <Section02__Text>We design software to service a variety of needs and 
                help you work across <Br />a range of environments and platforms.</Section02__Text>
            </Container>
        )
    }
}

const Br = styled.br`
    display:none;
    ${breakpoint('md')`
    display:block;
    `}
    ${breakpoint('lg')`
    display:block;
    `}
`
const Container = styled.div`
    // padding: 0 10%;
        padding: ${Themes.paddings.mobile};
    ${breakpoint('md')`
        padding: ${Themes.paddings.tablet};
    `}
    ${breakpoint('lg')`
        padding:${Themes.paddings.desktop};
    `}
`
const Section02__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
    `}
`

const Section02__Text = styled.div`
    margin-top:9px;
    margin-bottom: -10%;
    ${Text};
    color:${Themes.colors.grey};
    text-align:center;
        ${breakpoint('md')`
            font-size:${Themes.fontsize.p1}
            line-height:26px;
            margin-bottom: -10px;   
        `}
        ${breakpoint('lg')`
            font-size:${Themes.fontsize.p1}
            line-height:26px;
        `}
`

export default HideAndShowCard1;