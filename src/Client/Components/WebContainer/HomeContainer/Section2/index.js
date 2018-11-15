import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';
import BigTitle from '../../../Common/Title/BigTitle';

/** Images **/
import HomeSection02BgMd from '../../../../../Assets/Images/HomeSection02BgMd.png';
import HomeSection02Image from '../../../../../Assets/Images/HomeSection02Image.png';
import AI from '../../../../../Assets/Images/ai.svg';
import MachineLearning from '../../../../../Assets/Images/machinelearning.svg';
import Blockchain from '../../../../../Assets/Images/blockchain.svg';
import ArgumentedReality from '../../../../../Assets/Images/argumentedreality.svg';
import GPS from '../../../../../Assets/Images/gps.svg';
import Automation from '../../../../../Assets/Images/automation.svg';
import { _breakpoint } from 'styled-components-breakpoint/dist/cjs/core';

/** Components **/
import Text from '../../../Common/Text';
import YellowSpan from '../../../Common/YellowSpan';
import MintSpan from '../../../Common/MintSpan';
import FeaturesCarousel from '../../../Common/FeaturesCarousel';
import Button01 from '../../../Common/Button/Button01';
import HideAndShowCard1 from '../../../Common/HideAndShow/HideAndShowCard1';
import HideAndShowCard2 from '../../../Common/HideAndShow/HideAndShowCard2';
import HideAndShowCard3 from '../../../Common/HideAndShow/HideAndShowCard3';
import HideAndShowCard4 from '../../../Common/HideAndShow/HideAndShowCard4';
import { Link } from 'react-router-dom';

const Shadow = css`
    box-shadow : 0 0 8px rgba(50, 50, 93, 0.23);
`
class Section2 extends Component{
    render(){
        return(
            <Section02>
                <Container>
                    <Section02__Container>
                        <Section02__Title>How we can help</Section02__Title>
                        <YellowSpan />
                        <Section02__Text>We design software to service a variety of needs and 
                         help you work across <Br />a range of environments and platforms.</Section02__Text>
                        <FeaturesCarousel />
                    </Section02__Container>
                </Container>
            </Section02>
        )
    }
}


/**** Section 02 ****/
const Br = styled.br`
    display:none;
    ${breakpoint('md')`
    display:none;
    `}
    ${breakpoint('lg')`
    display:block;
    `}
`
const Br2 = styled.br`
    display:none;
    ${breakpoint('md')`
    display:block;
    `}
    ${breakpoint('lg')`
    display:none;
    `}
`
const Section02 = styled.div`
    // padding: 0 10%;
        padding: ${Themes.paddings.mobile};
    ${breakpoint('md')`
        padding: ${Themes.paddings.tablet};
    `}
    ${breakpoint('lg')`
        padding:${Themes.paddings.desktop};
    `}
`
const Container = styled.div`
    margin:0 auto;
    ${breakpoint('lg')`
        margin:auto 0 auto auto;
    `}
`
const Section02__Container = styled.div`
    margin:0 auto;
    ${breakpoint('sm')`
    `}
    ${breakpoint('md')`
    `}
    ${breakpoint('lg')`
    `}
`
const Section02__LeftDiv = styled.div`
    ${breakpoint('lg')`
        margin-right:0;
    `}
    ${breakpoint('xl')`
        width:683px;
    `}
`
const Section02__LeftDivContainer = styled.div`
`
const Section02__TitleDiv = styled.div`
    margin:0 auto;
    padding: 10%;
    padding-bottom: 0;
    ${breakpoint('lg')`
        margin-left:auto;
        margin-bottom:100px;
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

const Section02__Text__Bold = styled.div`
display: none;
    ${breakpoint('md')`
    display: none;
    font-size:${Themes.fontsize.p1}
    font-weight:${Themes.fontWeight.black}
    line-height:26px;
    margin-bottom: -10px;   
    `}
    ${breakpoint('lg')`
    font-size:${Themes.fontsize.p1}
    line-height:26px;
    `}
`
const Section02__ReadmoreContainer = styled.div`
display: none;
`
const Section02__Div = styled.div`
`

const Section02_ImgText = styled.div`
    margin-top:9px;
    font-size:${Themes.fontsize.p2};
    color:${Themes.colors.black};
    text-align:center;
        ${breakpoint('lg')`
            margin: 9px 0 0 35px;
            font-size:${Themes.fontsize.p2}
            line-height:20px;
        `}
`
const Section02__RightDiv = styled.div`
    display:none;
    ${breakpoint('lg')`
        display:block;
        background:url(${HomeSection02Image}) no-repeat left bottom;
    `}
`

const ButtonDiv = styled.div`
    width:64%;
    ${breakpoint('md')`
        // margin-left:-5px;
        margin: 0 auto;
    `}
    ${breakpoint('lg')`
        width:40%;
        // margin-left:0;
    `}
`
const ButtonLink = styled(Link)`
        cursor:'pointer';
`

export default Section2;