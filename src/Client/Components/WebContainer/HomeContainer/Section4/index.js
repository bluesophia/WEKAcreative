import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';
import BigTitle from '../../../Common/Title/BigTitle';

/** Images **/
import Section04BgSm from '../../../../../Assets/Images/Section04BgSm.png';
import HomeSection02BgMd from '../../../../../Assets/Images/HomeSection02BgMd.png';
import HomeSection02Image from '../../../../../Assets/Images/HomeSection02Image.png';
import AI from '../../../../../Assets/Images/ai.svg';
import MachineLearning from '../../../../../Assets/Images/machinelearning.svg';
import Blockchain from '../../../../../Assets/Images/blockchain.svg';
import ArgumentedReality from '../../../../../Assets/Images/argumentedreality.svg';
import GPS from '../../../../../Assets/Images/gps.svg';
import Automation from '../../../../../Assets/Images/automation.svg';
import LeveragetheFuture from '../../../../../Assets/Images/LeveragetheFuture.png';
import { _breakpoint } from 'styled-components-breakpoint/dist/cjs/core';

/** Components **/
import Text from '../../../Common/Text';
import YellowSpan from '../../../Common/YellowSpan';

const Shadow = css`
    box-shadow : 0 0 8px rgba(50, 50, 93, 0.23);
`
class Section4 extends Component{
    render(){
        return(
            <Section04>
                <Container>
                    <Section04__LeftDiv>
                        <Section04__TitleDiv>
                            <Section04__Title>Leverage the future</Section04__Title>
                            <YellowSpan />
                            <Section04__Text>Use our expertise to keep your business on the cutting
                            edge of new technology</Section04__Text>
                        </Section04__TitleDiv>
                        <Section04__Contents>
                            <Section04__ContentDiv>
                                <Section04__Image src={AI} />
                                <div>
                                    <Section04_ImgText>AI</Section04_ImgText>
                                </div>
                            </Section04__ContentDiv>
                            <Section04__ContentDiv>
                                <Section04__Image src={MachineLearning} />
                                <div>
                                    <Section04_ImgText>Machine learning</Section04_ImgText>
                                </div>
                            </Section04__ContentDiv>
                            <Section04__ContentDiv>
                                <Section04__Image src={Blockchain} />
                                <div>
                                    <Section04_ImgText>Blockchain</Section04_ImgText>
                                </div>
                            </Section04__ContentDiv>
                            <Section04__ContentDiv>
                                <Section04__Image src={ArgumentedReality} />
                                <div>
                                    <Section04_ImgText>Argumented reality</Section04_ImgText>
                                </div>
                            </Section04__ContentDiv>
                            <Section04__ContentDiv>
                                <Section04__Image src={GPS} />
                                <div>
                                    <Section04_ImgText>GPS integration</Section04_ImgText>
                                </div>
                            </Section04__ContentDiv>
                            <Section04__ContentDiv>
                                <Section04__Image src={Automation} />
                                <div>
                                    <Section04_ImgText>Advanced automation</Section04_ImgText>
                                </div>
                            </Section04__ContentDiv>  
                        </Section04__Contents>
                        <Section04__Contents2>
                                <Section04__Image src={LeveragetheFuture} />
                        </Section04__Contents2>
                    </Section04__LeftDiv>
                </Container>
                <Section04__RightDiv>
                </Section04__RightDiv>
            </Section04>
        )
    }
}

/**** Section 04 ****/

const Section04 = styled.div`
    background:url(${Section04BgSm}) no-repeat left top;
    padding: ${Themes.paddings.mobile};
    ${breakpoint('md')`
    background:url(${HomeSection02BgMd}) no-repeat top left;
    padding: ${Themes.paddings.tablet};
    `}
    ${breakpoint('lg')`
        background-size:100%;
        height:768px;
    `}
`
const Container = styled.div`
    margin:0 auto;
    ${breakpoint('lg')`
        margin:auto 0 auto auto;
    `}
`
const Section04__LeftDiv = styled.div`
    ${breakpoint('lg')`
        margin-right:0;
    `}
    ${breakpoint('md')`
        display: flex;
        flex-direction: column;
        align-items: center;
    `}
    ${breakpoint('xl')`
        width:683px;
    `}
`
const Section04__LeftDivContainer = styled.div`
`
const Section04__TitleDiv = styled.div`
    margin:0 auto;
    ${breakpoint('lg')`
    `}
`
const Section04__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
    `}
`
const Section04__Contents = styled.div`
    ${breakpoint('md')`
        display: none;
    `}
    ${breakpoint('lg')`
        display: none;
    `}
`
const Section04__Contents2 = styled.div`
    display: none;
    ${breakpoint('md')`
        display: block;
    `}
`
const Section04__ContentDiv = styled.div`
    margin:50px auto 0 auto;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
        ${breakpoint('lg')`
        `}
`
const Section04__Image = styled.img`
    width:120px;
    height:auto;
    margin-bottom:10px;
    ${breakpoint('md')`
        width: 100%;
        transform: scale(1);
        margin-bottom: 10%;
        `}
    ${breakpoint('lg')`
        margin-top:100px;
    `}    
`
const Section04__Subtitle = styled.p`
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
const Section04__Text = styled.div`
    margin-top:9px;
    ${Text};
    color:${Themes.colors.grey};
    text-align:center;
        ${breakpoint('md')`
            margin-bottom: 10%;
        `}
        ${breakpoint('lg')`
            font-size:${Themes.fontsize.p2}
            line-height:20px;
        `}
`
const Section04_ImgText = styled.div`
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
const Section04__RightDiv = styled.div`
    display:none;
    ${breakpoint('lg')`
        
    `}
`
export default Section4;