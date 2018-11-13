import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';
/** components **/
import BigTitle from '../../../Common/Title/BigTitle';
import Text from '../../../Common/Text';
import YellowSpan from '../../../Common/YellowSpan';
import FeaturesCarousel from '../../../Common/FeaturesCarousel';

/** Images **/
import SomeofOurWorkPassafe from '../../../../../Assets/Images/SomeofOurWorkPassafe.svg'
import SomeofOurWorkRugdoctor from '../../../../../Assets/Images/SomeofOurWorkRugdoctor.svg'
import SomeofOurWorkMethTesting from '../../../../../Assets/Images/SomeofOurWorkMethTesting.svg'
import SomeofOurWorkToyota from '../../../../../Assets/Images/SomeofOurWorkToyota.svg'

class Section3 extends Component{
    render(){
        return(
            <Section03>
                <Section03__Container>
                    <Section03__Title>Some of our work</Section03__Title>
                    <YellowSpan />
                    <Section03__Text>Big or small it doesn’t matter - the companies we support have fantastic people and ideas to guide them. <Br />Big or small it doesn’t matter - the companies we support have fantastic people and ideas to guide them.
                    </Section03__Text>
                </Section03__Container>
                <Section03__Container__image>
                    <Section03__Container__imageSm>   
                        <Section03__Image src={SomeofOurWorkPassafe} />
                        <Section03__Image src={SomeofOurWorkRugdoctor} />
                    </Section03__Container__imageSm> 
                    <Section03__Container__imageSm> 
                        <Section03__Image src={SomeofOurWorkMethTesting} />
                        <Section03__Image src={SomeofOurWorkToyota} />
                    </Section03__Container__imageSm> 
                </Section03__Container__image>
            </Section03>
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
const Section03 = styled.div`
    // padding: ${Themes.paddings.mobile};
    padding: 15% 10% 10% 10%;
    ${breakpoint('md')`
    padding: ${Themes.paddings.tablet};
    margin-bottom: 150px;
    `}
    ${breakpoint('lg')`
        padding: ${Themes.paddings.desktop};
        margin-bottom: 20%;
    `}
`
const Section03__Container = styled.div`
`
const Section03__Container__image = styled.div`
    margin:0 auto;
    ${breakpoint('sm')`
    `}
    ${breakpoint('md')`
        padding-top: 8%;
        margin-bottom: 10%;
        position: relative;
        transform: scale(1.4);
    `}
    ${breakpoint('lg')`
        margin-bottom: 0;
        transform: scale(1.8);
    `}
`
const Section03__Container__imageSm = styled.div`
    ${breakpoint('md')`
    display:flex;
    justify-content: center;
    align-items: center;
    `}
`
const Section03__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
    `}
`
const   Section03__Text = styled.div`
    margin-top:9px;
    margin-bottom: 30px;
    ${Text};
    color:${Themes.colors.grey};
    text-align:justify;
        ${breakpoint('md')`
            font-size:${Themes.fontsize.p1}
            line-height:26px;
            margin-bottom: 10%;
        `}
        ${breakpoint('lg')`
            
        `}
`

const Section03__Image = styled.img`
    margin: -2px 0;
`
export default Section3;