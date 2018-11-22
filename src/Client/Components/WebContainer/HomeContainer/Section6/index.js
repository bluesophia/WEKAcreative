import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
/** Animation **/
import ScrollAnimation from 'react-animate-on-scroll';

/** components **/
import CardCarousel from '../../../Common/CardCarousel';
import BigTitle from '../../../Common/Title/BigTitle';
import Text from '../../../Common/Text';
import YellowSpan from '../../../Common/YellowSpan';

/** Images **/
import OurProductSiteScops from '../../../../../Assets/Images/OurProductSiteScops.svg';
import OurProductSiteScops2 from '../../../../../Assets/Images/OurProductSiteScops2.svg';
import OurProductSiteUnify from '../../../../../Assets/Images/OurProductSiteUnify.svg';
import OurProductSiteUnify2 from '../../../../../Assets/Images/OurProductSiteUnify2.svg';

class Section6 extends Component{
    render(){
        return(
            <ThemeProvider theme={Themes}>
                <Section06>
                <ScrollAnimation animateIn='fadeIn'>
                    <Section06__TitleDiv>
                        <Section06__Title>Our product suite</Section06__Title>
                        <YellowSpan />
                        <Section06__Text>Looking for something quicker to implement? <Br />
                            Explore some of our in-house solutions.</Section06__Text>
                    </Section06__TitleDiv>
                    <Section06__Div>
                        <Section06__Div__Image1>
                            <Seciton06__Image src={OurProductSiteUnify}/>
                            <Seciton06__Image src={OurProductSiteScops}/>
                        </Section06__Div__Image1>
                        <Section06__Div__Image2>
                            <Seciton06__Image2 src={OurProductSiteUnify2}/>
                            <Seciton06__Image2 src={OurProductSiteScops2}/>
                        </Section06__Div__Image2>
                    </Section06__Div>
                    </ScrollAnimation>
                </Section06>
            </ThemeProvider>
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
const Section06 = styled.div`
    padding: 0 10% 0 10%;
    ${breakpoint('md')`
        padding: ${Themes.paddings.tablet};
    `}
    ${breakpoint('lg')`
        padding: 10% 10% 3% 10%;
    `}
`
const Section06__TitleDiv = styled.div`
    margin:0 auto;
    padding: 20% 0; 
    padding-bottom: 0;
    ${breakpoint('md')`
        padding: 0;
    `}
    ${breakpoint('lg')`
    `}
`
const Section06__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
    `}
`
const Section06__Text = styled.div`
    margin-top:9px;
    margin-bottom: 10%;
    ${Text};
    color:${Themes.colors.grey};
    text-align:left;
        ${breakpoint('md')`
            font-size:${Themes.fontsize.p1}
            line-height:26px;
            text-align:center;
        `}
`

const Section06__Div = styled.div`
    transform: scale(0.9);
    max-width:1366px;
`
const Section06__Div__Image1 = styled.div`
    padding: 0 15%;
    max-width:1366px;
    ${breakpoint('md')`
            display:none;
        `}
    ${breakpoint('lg')`
        display:none;
    `}
`
const Section06__Div__Image2 = styled.div`
    display:none;
    ${breakpoint('md')`
        display:flex;
        transform: scale(0.8);
        justify-content: center;
    `}
    ${breakpoint('lg')`
        display:flex;
        transform: scale(1);
    `}
`

const Seciton06__Image = styled.img`
    margin-bottom: 25%;
`
const Seciton06__Image2 = styled.img`
    padding: 10%;
    ${breakpoint('md')`
    padding: 10%;
    padding-top: 0;
    `}
`
const StyledCarousel = styled(CardCarousel)`
    margin:0 auto;
`
const CarouselDiv = styled.div`
    margin:0 auto;
    ${breakpoint('lg')`
        width:1000px;
    `}
`
export default Section6;