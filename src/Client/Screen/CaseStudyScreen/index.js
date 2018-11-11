import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';

/** Components**/
import BigTitle from '../../Components/Common/Title/BigTitle.js';
import CaseStudyDropdownContainer from '../../Components/WebContainer/CaseStudyDropdownContainer';
import YellowSpan from '../../Components/Common/YellowSpan';
import Text from '../../Components/Common/Text';

/** Images **/
import SectionBg01 from '../../../Assets/Images/BlogSection01Bg.jpg';
import SectionBg02 from '../../../Assets/Images/BlogSection02Bg.png';
import Image01 from '../../../Assets/Images/BlogSection01Image.png';
import Challenge from '../../../Assets/Images/challenge.svg';
import Solution from '../../../Assets/Images/solution.svg';
import Solution2 from '../../../Assets/Images/solution2.svg';
import Result from '../../../Assets/Images/result.svg';
import Result2 from '../../../Assets/Images/result2.svg';
import Toyota from '../../../Assets/Images/toyota.png';
import MethTesting from '../../../Assets/Images/methtesting.png';


class CaseStudyScreen extends Component {
  render(){
    return(
        <ThemeProvider theme={Themes}>
          <Container>
            <Section>
              {/* header */}
              <Section__Header01>
                <Section__HeaderContainer>
                  <Section__TitleDiv>
                    <Section__Titlesm>Rug Doctor NZ</Section__Titlesm>
                    <Section__Title>A seamless hiring experience</Section__Title>
                  </Section__TitleDiv>
                  <Section__ImageDiv>
                    <Section__Image src={Image01}/>
                  </Section__ImageDiv>
                </Section__HeaderContainer>
              </Section__Header01>
              {/* section2 */}
                  <Section02__TitleDiv>
                    <Section02__Title1>Rug Doctor have been New Zealands go-to brand for keeping our homes clean 
                      for over 38 years.
                    </Section02__Title1>
                    <YellowSpan />
                    <Section02__Text>Together we designed and built a software solution that would help Rug Doctor streamline their Customer hire experience and help them continue leading the way into the future.
                    </Section02__Text>
                  </Section02__TitleDiv>
              {/* section3 */}
                <Section__Container>
                <Section__Contents>
                  <Section03__TitleDiv>
                      <Section02__Title2>The challenge</Section02__Title2>
                      <YellowSpan />
                      <Section__Image src={Challenge}/>
                      <Section03__Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam malesuada bibendum arcu vitae elementum curabitur. Ultricies mi eget mauris pharetra et ultrices. A iaculis at erat pellentesque. Semper eget duis at tellus at urna condimentum mattis. 
                      Dignissim diam quis enim lobortis. Sed libero enim sed faucibus turpis in eu. In hendrerit gravida rutrum quisque non. Sed vulputate odio ut enim blandit. Risus sed vulputate odio ut enim blandit volutpat maecenas. Vel fringilla est ullamcorper eget. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Sed faucibus turpis in eu. Tempor nec feugiat nisl pretium fusce.
                      </Section03__Text>
                  </Section03__TitleDiv>
                  <Section03__TitleDiv>
                      <Section02__Title2>The solution</Section02__Title2>
                      <YellowSpan />
                      <Section__Image src={Solution}/>
                      <Section03__Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam malesuada bibendum arcu vitae elementum curabitur. Ultricies mi eget mauris pharetra et ultrices. A iaculis at erat pellentesque. Semper eget duis at tellus at urna condimentum mattis. 
                      Dignissim diam quis enim lobortis. Sed libero enim sed faucibus turpis in eu. In hendrerit gravida rutrum quisque non. Sed vulputate odio ut enim blandit. Risus sed vulputate odio ut enim blandit volutpat maecenas. Vel fringilla est ullamcorper eget. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Sed faucibus turpis in eu. Tempor nec feugiat nisl pretium fusce.
                      </Section03__Text>
                      {/* <Section__Image2 src={Solution2}/> */}
                  </Section03__TitleDiv>
                  <Section03__TitleDiv>
                      <Section02__Title2>The result</Section02__Title2>
                      <YellowSpan />
                      <Section__Image src={Result}/>
                      <Section03__Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam malesuada bibendum arcu vitae elementum curabitur. Ultricies mi eget mauris pharetra et ultrices. A iaculis at erat pellentesque. Semper eget duis at tellus at urna condimentum mattis. 
                      Dignissim diam quis enim lobortis. Sed libero enim sed faucibus turpis in eu. In hendrerit gravida rutrum quisque non. Sed vulputate odio ut enim blandit. Risus sed vulputate odio ut enim blandit volutpat maecenas. Vel fringilla est ullamcorper eget. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Sed faucibus turpis in eu. Tempor nec feugiat nisl pretium fusce.
                      </Section03__Text>
                      {/* <Section__Image2 src={Result2}/> */}
                  </Section03__TitleDiv>
                  {/* <CaseStudyDropdownContainer />  */}
                </Section__Contents>
              </Section__Container>
              {/* section4 */}
              <Section__Container>
                <Section__Contents>
                  <Section04__TitleDiv>
                      <Section04__Title>Browse more of our work</Section04__Title>
                      <YellowSpan />
                  </Section04__TitleDiv>    
                    <Section__ImageDiv2>
                      <Section__ImageDivsm>
                        <Section4__Image src={MethTesting}/>
                        <Section04__Text>Transforming home inspections</Section04__Text>  
                        <Section04__Textsm>DEBi</Section04__Textsm>  
                      </Section__ImageDivsm>
                      <Section__ImageDivsm>
                        <Section4__Image src={Toyota}/>
                        <Section04__Text>Removing friction from servicing</Section04__Text>  
                        <Section04__Textsm>Toyota NZ</Section04__Textsm> 
                      </Section__ImageDivsm> 
                    </Section__ImageDiv2>
                </Section__Contents>
              </Section__Container>
            </Section>
          </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
    position:relative;
`
const Section = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  margin-bottom: 50px;
  ${breakpoint('md')`
  `}
`
const Section__Header01 = styled.div`
  background:url(${SectionBg01}) no-repeat center top;
  background-size:444px 260px;
  padding:18% 0;
  background-position: top right;
  ${breakpoint('md')`
    padding:8% 0;
  `}
  ${breakpoint('lg')`
    padding:5% 10% 0 10%;
    background-size:cover 100%;
  `}
`
const Section__Header02 = styled.div`
  background:url(${SectionBg02}) no-repeat center top;
  background-size:cover;
  padding:18% 0;
  ${breakpoint('md')`
    padding:8% 0;
  `}
  ${breakpoint('lg')`
    padding:5% 10% 0 10%;
    background-size:100% 330px;
  `}
`
const Section__HeaderContainer = styled.div`
  max-width:1366px;
  margin:0 auto;
  ${breakpoint('md')`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
  `}
  ${breakpoint('lg')`
    flex-direction:row;
    position:relative;
  `}
`
const Section__Container = styled.div`
  ${breakpoint('lg')`
    max-width:1366px;
    padding:0 10%;
    margin:0 auto;
  `}
`
const Section__TitleDiv = styled.div`
  padding-right:8%;
  padding-left:8%;
  ${breakpoint('md')`
  `}
  ${breakpoint('lg')`
    padding:0;
    margin-left:0;
  `}
`
const Section__Title = styled.div`
    ${BigTitle};
    font-size: 32px;
    color:white;
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('md')`
      ${BigTitle};
      font-weight:${Themes.fontWeight.regular};
      color:white;
    `}
    ${breakpoint('lg')`
      text-align:left;
      width:90%;
    `}
  `

const Section__Titlesm = styled.div`
  ${BigTitle};
  font-size: 20px;
  color:white;
  font-weight:${Themes.fontWeight.black};
  ${breakpoint('md')`
    ${BigTitle};
    font-weight:${Themes.fontWeight.regular};
    color:white;
  `}
  ${breakpoint('lg')`
    text-align:left;
    width:90%;
  `}
`

 const Section__ImageDiv = styled.div`  
    display:none;
    ${breakpoint('md')`
     `}
     ${breakpoint('lg')`
     display:block;
     margin-bottom:-140px;
     `}
`
const Section__ImageDiv2 = styled.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${breakpoint('md')`
    `}
    ${breakpoint('lg')`
    display:block;
    margin-bottom:-140px;
    `}
`
const Section__ImageDivsm = styled.div`
    margin-bottom: 10px;
`
const Section__Image = styled.img`
    transform: scale(0.53);
    margin-top: -60px;
    margin-bottom: -60px;
   ${breakpoint('md')`
   `}
`
const Section__Image2 = styled.img`
    transform: scale(0.53);
    margin-top: -60px;
    margin-bottom: -60px;
   ${breakpoint('md')`
   `}
`
const Section4__Image = styled.img`
    transform: scale(0.8);
   ${breakpoint('md')`
   `}
`
const Section__Contents = styled.div`
   box-sizing:border-box;
   width:100%;
   margin:0 auto;
    ${breakpoint('md')`
    padding:30px 10% 100px 10%;
     `}
     ${breakpoint('lg')`
     width:60%;
     padding:30px 0 100px 0;
     margin:0 auto 0 0;
   `}
 `

 const Section02__TitleDiv = styled.div`
    margin:0 auto;
    padding: 10%;
    padding-bottom: 60px;
    ${breakpoint('lg')`
        margin-left:auto;
        margin-bottom:100px;
    `}
`
const Section03__TitleDiv = styled.div`
margin:0 auto;
padding: 0 0 3%;
${breakpoint('lg')`
    margin-left:auto;
    margin-bottom:100px;
`}
`

const Section04__TitleDiv = styled.div`
margin:0 auto;
padding: 12%;
padding-top: 0;
padding-bottom: 0;
${breakpoint('lg')`
    margin-left:auto;
    margin-bottom:100px;
`}
`

const Section02__Title1 = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    font-size: 24px;
    line-height: 32px;
    ${breakpoint('lg')`
        text-align:left;
    `}
`
const Section02__Title2 = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    font-size: 38px;
    line-height: 32px;
    ${breakpoint('lg')`
        text-align:left;
    `}
`
const Section03__Text = styled.div`
    margin-top:9px;
    margin-bottom: 30px;
    padding: 0 10%;
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
const Section04__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    font-size: 32px;
    line-height: 42px;
    ${breakpoint('lg')`
        text-align:left;
    `}
`
const Section04__Text = styled.div`
    margin-top:9px;
    ${Text};
    font-weight: ${Themes.fontWeight.black};
    text-align:center;
        ${breakpoint('lg')`
            text-align:left;
            max-width:400px;
            margin: 9px 0 0 35px;
            font-size:${Themes.fontsize.p2}
            line-height:20px;
        `}
`
const Section04__Textsm = styled.div`
    margin-top:9px;
    ${Text};
    font-size: 16px;
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

const Section02__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
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
export default CaseStudyScreen;