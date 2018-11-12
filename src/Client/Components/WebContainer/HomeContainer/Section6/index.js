import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';

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
                    <Section06__TitleDiv>
                        <Section06__Title>Our product suite</Section06__Title>
                        <YellowSpan />
                        <Section06__Text>Looking for something quicker to implement? 
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
                </Section06>
            </ThemeProvider>
        )
    }
}

const Section06 = styled.div`
    padding: 0 10% 0 10%;
    ${breakpoint('md')`
        padding: ${Themes.paddings.tablet};
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
    text-align:center;
        ${breakpoint('lg')`
            font-size:${Themes.fontsize.p2}
            line-height:20px;
        `}
`

const Section06__Div = styled.div`
    
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
    margin-bottom: 15%;
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