import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';

/** components **/
import BigTitle from '../../../Common/Title/BigTitle';
import Text from '../../../Common/Text';
import YellowSpan from '../../../Common/YellowSpan';

/** Logos **/
import LogosSm from '../../../../../Assets/Images/LogosSm.svg';
import LogosLg from '../../../../../Assets/Images/LogosLg.svg';
/** Images**/
import HomeSection05BgMd from '../../../../../Assets/Images/HomeSection05BgMd.png';

class Section5 extends Component{
    render(){
        return(
            <ThemeProvider theme={Themes}>
                <Section05>
                    <Section05__Div>
                        <Section05__TitleDiv>
                                <Section05__Title>We can <Br />integrate with</Section05__Title>
                                <YellowSpan />
                                <Section05__Text>Our software experts are well placed to integrate with existing systems. <Br2 />These are some of our current integrations.
                                </Section05__Text>
                        </Section05__TitleDiv>
                        <Section05__Logos>
                            <Section05__LogosDiv01>
                                <Section05__Logo src={LogosSm}/>
                                <Section05__Logo1 src={LogosLg}/>
                            </Section05__LogosDiv01>
                        </Section05__Logos>
                    </Section05__Div>    
                </Section05>
            </ThemeProvider>
        )
    }
}

/**** Section 05 ****/
const Br = styled.br`
${breakpoint('md')`
    display: none;
`}
`
const Br2 = styled.br`
    display:none;
    ${breakpoint('md')`
    display:block;
    `}
    ${breakpoint('lg')`
    display:block;
    `}
`
const Section05 = styled.div`
    padding: ${Themes.paddings.mobile};
    padding-bottom: 50px;
    ${breakpoint('md')`
        background:url(${HomeSection05BgMd}) no-repeat;
        // padding:0 10%;
        padding: '20% 10% 0 10%';
        padding-bottom: 90px;
    `}
    ${breakpoint('lg')`
        background-size: 100%;
        padding: ${Themes.paddings.desktop};
    `}
`
const Section05__Div = styled.div`
`
const Section05__TitleDiv = styled.div`
    margin:0 auto;
    ${breakpoint('lg')`
    `}
`
const Section05__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
        margin-top: 90px;
    `}
`
const Section05__Text = styled.div`
    margin-top:9px;
    ${Text};
    color:${Themes.colors.grey};
    text-align:center;
        ${breakpoint('md')`
            margin-bottom: 10%;
            font-size:${Themes.fontsize.p1}
            line-height:26px;
        `}
`

const Section05__Logos = styled.div`
    display:flex;
    justify-content:space-around;
    // padding-top:50px;
    margin:0 auto;
    ${breakpoint('lg')`
        flex-direction:column;
    `}
`
const Section05__LogosDiv01 = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom: 10%;
        ${breakpoint('lg')`
            flex-direction:row;
            align-items:center;
        `}
`
const Section05__LogosDiv02 = styled.div`
    display:flex;
    flex-direction:column;
        ${breakpoint('lg')`
            flex-direction:row;
            align-items:flex-start;
        `}
`

const Section05__Logo = styled.img`
    width:100%;
    height:auto;
    margin:0 auto;
    margin-top: 120px; 
    transform: scale(2);
    ${breakpoint('sm')`
        width:146px;
    `}
    ${breakpoint('md')`
        display: none;
    `}
    ${breakpoint('lg')`
        display: none;
    `}
`
const Section05__Logo1 = styled.img`
    display: none;
    ${breakpoint('md')`
    width:100%;
    height:auto;
    margin:0 auto;
    margin-top: 30%;
    transform: scale(2.3);
    z-index: -1;
    display: block;
    `}
    ${breakpoint('lg')`
    transform: scale(1);
    margin-top: 0;
    `}
`

export default Section5;