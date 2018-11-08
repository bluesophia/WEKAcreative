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


class Section5 extends Component{
    render(){
        return(
            <ThemeProvider theme={Themes}>
                <Section05>
                    <Section05__TitleDiv>
                            <Section05__Title>We can <br />integrate with</Section05__Title>
                            <YellowSpan />
                            <Section05__Text>Our software experts are well placed to integrate with existing systems. These are some of our current integrations.
                            </Section05__Text>
                    </Section05__TitleDiv>
                    <Section05__Logos>
                        <Section05__LogosDiv01>
                            <Section05__Logo src={LogosSm}/>
                        </Section05__LogosDiv01>
                    </Section05__Logos>
                </Section05>
            </ThemeProvider>
        )
    }
}

/**** Section 05 ****/

const Section05 = styled.div`
    padding:0 10%;
    padding-bottom: 50px;
    ${breakpoint('md')`
        padding:18% 18% 10% 18%;
    `}
    ${breakpoint('lg')`
       padding:10% 18%; 
       max-width:1366px;
       margin:0 auto;
    `}
`

const Section05__TitleDiv = styled.div`
    margin:0 auto;
    padding: 50px 10%;
    padding-bottom: 0;
    ${breakpoint('lg')`
        margin-left:auto;
        margin-bottom:100px;
    `}
`
const Section05__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
        text-align:left;
    `}
`
const Section05__Text = styled.div`
    margin-top:9px;
    ${Text};
    color:${Themes.colors.grey};
    text-align:center;
        ${breakpoint('lg')`
            text-align:left;
            max-width:400px;
            margin: 9px 0 0 35px;
            font-size:${Themes.fontsize.p2}
            line-height:20px;
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
`

export default Section5;