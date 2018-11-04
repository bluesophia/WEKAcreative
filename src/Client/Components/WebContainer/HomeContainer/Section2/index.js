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

const Shadow = css`
    box-shadow : 0 0 8px rgba(50, 50, 93, 0.23);
`
class Section2 extends Component{
    render(){
        return(
            <Section02>
                <Container>
                    <Section02__LeftDiv>
                        <Section02__TitleDiv>
                            <Section02__Title>How we can help</Section02__Title>
                            <YellowSpan />
                            <Section02__Text>We design software to service a variety of needs and 
                                help you work across a range of environments and platforms.</Section02__Text>
                        </Section02__TitleDiv>
                        <Section02__Contents>
                            <Section02__ContentDiv>
                                <Section02__Image src={AI} />
                                <div>
                                    <Section02_ImgText>AI</Section02_ImgText>
                                </div>
                            </Section02__ContentDiv>
                            <Section02__ContentDiv>
                                <Section02__Image src={MachineLearning} />
                                <div>
                                    <Section02_ImgText>Machine learning</Section02_ImgText>
                                </div>
                            </Section02__ContentDiv>
                            <Section02__ContentDiv>
                                <Section02__Image src={Blockchain} />
                                <div>
                                    <Section02_ImgText>Blockchain</Section02_ImgText>
                                </div>
                            </Section02__ContentDiv>
                            <Section02__ContentDiv>
                                <Section02__Image src={ArgumentedReality} />
                                <div>
                                    <Section02_ImgText>Argumented reality</Section02_ImgText>
                                </div>
                            </Section02__ContentDiv>
                            <Section02__ContentDiv>
                                <Section02__Image src={GPS} />
                                <div>
                                    <Section02_ImgText>GPS integration</Section02_ImgText>
                                </div>
                            </Section02__ContentDiv>
                            <Section02__ContentDiv>
                                <Section02__Image src={Automation} />
                                <div>
                                    <Section02_ImgText>Advanced automation</Section02_ImgText>
                                </div>
                            </Section02__ContentDiv>  
                        </Section02__Contents>
                    </Section02__LeftDiv>
                </Container>
                <Section02__RightDiv>
                </Section02__RightDiv>
            </Section02>
        )
    }
}

/**** Section 02 ****/

const Section02 = styled.div`
    padding: 0 8% 60px;
    ${breakpoint('md')`
    padding: 60px 20%;
    `}
    ${breakpoint('lg')`
        padding:0;
        background:url(${HomeSection02BgMd}) no-repeat right bottom;
        background-size:100%;
        height:768px;
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-column-gap:40px;
    `}
`
const Container = styled.div`
    margin:0 auto;
    ${breakpoint('lg')`
        margin:auto 0 auto auto;
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
        text-align:left;
    `}
`
const Section02__Contents = styled.div`
`
const Section02__ContentDiv = styled.div`
    margin:60px auto 0 auto;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
        ${breakpoint('lg')`
        flex-direction:row;
        align-items:flex-start;
        `}
`
const Section02__Image = styled.img`
    width:169px;
    height:auto;
    margin-bottom:10px;
`
const Section02__Subtitle = styled.p`
    margin-top:20px;
    margin-bottom:0;
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h3};
    font-weight:${Themes.fontWeight.bold};
    text-align:center;
    padding:0;
    ${breakpoint('lg')`
      margin: 0 0 0 35px;   
      line-height:30px;
      text-align:left; 
    `}
`
const Section02__Text = styled.div`
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
const Section02_ImgText = styled.div`
    margin-top:9px;
    font-size:${Themes.fontsize.p2};
    color:${Themes.colors.black};
    text-align:center;
        ${breakpoint('lg')`
            text-align:left;
            max-width:400px;
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
export default Section2;