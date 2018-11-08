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
import OurProductSiteUnify from '../../../../../Assets/Images/OurProductSiteUnify.svg';

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
                        <Seciton06__Image src={OurProductSiteUnify}/>
                        <Seciton06__Image src={OurProductSiteScops}/>
                    </Section06__Div>
                </Section06>
            </ThemeProvider>
        )
    }
}

const Section06 = styled.div`
    padding-top:18%;
    padding-bottom:40px;
    ${breakpoint('md')`
        padding-top:10%;
        padding-bottom:8%;
    `}
`
const Section06__TitleDiv = styled.div`
    margin:0 auto;
    padding: 50px 10%;
    padding-bottom: 0;
    ${breakpoint('lg')`
        margin-left:auto;
        margin-bottom:100px;
    `}
`
const Section06__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
        text-align:left;
    `}
`
const Section06__Text = styled.div`
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

const Section06__Div = styled.div`
    padding: 0 15%;
    max-width:1366px;
`

const Seciton06__Image = styled.img`
    margin: 30px auto;
`
// const Section06__Title = styled.div`
//     ${Title};
//     color:white;
//     padding-bottom:60px;
//         ${breakpoint('md')`
//         margin:0 auto;
//         `}
// `
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