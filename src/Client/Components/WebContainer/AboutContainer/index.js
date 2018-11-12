import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import Text from '../../Common/Text';

/** Images **/
import AboutSectionBgMd from '../../../../Assets/Images/AboutSectionBgMd.png';
import HomeSection01BgSm from '../../../../Assets/Images/HomeSection01BgSm.png';
import AboutSectionBglg from '../../../../Assets/Images/AboutSectionBglg.svg';
import mainImage from '../../../../Assets/Images/AboutSection01Image.svg';
import mainImage2 from '../../../../Assets/Images/AboutSection01Image2.svg';
import mainImage2_1 from '../../../../Assets/Images/AboutSection01Image2_1.svg';
import mainImage3 from '../../../../Assets/Images/AboutSection01Image3.svg';

/** components **/
import Title from '../../Common/Title/Title';
import BigTitle from '../../Common/Title/BigTitle';

class AboutContainer extends Component {
  render(){
    return(
      <ThemeProvider theme={Themes}>   
      <div>
            <Section01>
            {/* <Section01__ImageTop><MainImageBackground src={mainImage2_1}/></Section01__ImageTop> */}
              <Section01__Container>             
                <Section01__TitleDiv>
                    <Section01__Title>Global clients around Us</Section01__Title>
                    <Section01__Text>Over 4 years, EasyForms has acquired clients across the globe, in New Zealand, Australia, the Pacific Islands, Canada, The United Kingdom, Ireland and Korea. </Section01__Text>
                </Section01__TitleDiv>
                <Section01__Image><MainImage src={mainImage}/></Section01__Image>
                <Section01__Image2><MainImage2 src={mainImage2}/></Section01__Image2> 
              </Section01__Container>
            </Section01>
            <Section02>
              <Container>
                    <Section__Title>About Us</Section__Title>
                    <Section__Text>EasyForms is a 100% Kiwi owned and 
                    operated company which grew from one 
                    man’s passion for innovation and 
                    technology. Keith Archer wanted to create 
                    a company that would make a real 
                    difference to customers and their 
                    businesses. Not just one that said the right 
                    things, but that actually delivered.<br /><br />
                    In true Kiwi style, over a beer and brain 
                    storming session with a friend, Keith 
                    penned a business plan on the back of a 
                    beer coaster with a core purpose of 
                    reducing stacks of paperwork in the 
                    business environment. At the time, an 
                    electrician was tending to some electrical 
                    repairs in Keith’s home and overheard this 
                    discussion and piped up, that removing the 
                    stacks of paperwork involved in code of 
                    compliance forms would be a game-
                    changer. With that, Keith set out to 
                    establish EasyForms in March, 2013 from 
                    his home. Dave Rouse was brought on as 
                    Quality Assurance Director and business 
                    partner in July 2015 to drive strategy. The 
                    company has a marketing and sales team, 
                    an international division of 4, 7 directors 
                    and a total of 20 staff in our Auckland 
                    offices.<br /><br />

                    Over 4 years, EasyForms has acquired 
                    clients across the globe, in New Zealand, 
                    Australia, the Pacific Islands, Canada, The 
                    United Kingdom, Ireland and Korea. The 
                    company started out automating paper 
                    forms into app-based solutions and has 
                    now evolved to provide a complete solution 
                    for workflow management and develops 
                    bespoke web portal and app-based 
                    solutions.</Section__Text>
                </Container>
            </Section02>
            <Section03>
              <Container>
                  <Section__Title>Our Vision</Section__Title>
                  <Section__Text>To provide you with better control and 
                  increased transparency of your business, 
                  while streamlining your workflow and job 
                  management processes. This increases 
                  productivity, reduces operational costs and 
                  ultimately saves you time so you can focus 
                  on the things you need to, while giving you 
                  the ability to mobilise your business 
                  effortlessly.</Section__Text>
              </Container>
            </Section03>
      </div>
    </ThemeProvider>
    )
  }
}

const Section01 = styled.div`
  margin:0;
  background: url('${HomeSection01BgSm}');
  background-position:center top;
  background-repeat:no-repeat;
  background-size:100% 100%;
  ${breakpoint('md')`
      background: url('${AboutSectionBgMd}');
      background-position:left top;
      background-repeat:no-repeat;
      background-size:100% 168%;     
  `}
  ${breakpoint('lg')`
      background: url('${AboutSectionBglg}');
      background-repeat:no-repeat;
      // background-size:100% 114%; 
  `}
`
const MainImageBackground = styled.img`
`
const Section01__Container = styled.div`
  // padding:18% 8% 10% 8%;
  padding: ${Themes.paddings.mobileTop};
  display:flex;
  flex-direction:column;
  align-items:center;
      ${breakpoint('md')`
          padding:10% 17%;
      `}
      ${breakpoint('lg')`
          max-width: 1366px;
          margin:0 auto;
          padding:5% 10% 10%;
          align-items:flex-start; 
          flex-direction:row;
      `}
`
const Section01__ImageTop = styled.div`
  display: none;
    ${breakpoint('md')`
    display: none;
  `}
    ${breakpoint('lg')`
    display: block;
    z-index: -10;
`}
`
const Section01__Image = styled.div`
    width:100%;
        ${breakpoint('md')`
            display: none;
        `}
        ${breakpoint('lg')`
            display: none;
        `}
`
const MainImage = styled.img`
    width:inherit;
    height:auto;
    ${breakpoint('md')`
            display: none;
        `}
        ${breakpoint('lg')`
            display: none;
        `}
    
`
const Section01__Image2 = styled.div`
    display: none;
        ${breakpoint('md')`
          display: flex;
          margin-left:0;
          margin-top: 130px;
        `}
        ${breakpoint('lg')`
          content: url(${mainImage3});
          transform: scale(2);
          margin-right: 10%;
        `}
`
const MainImage2 = styled.img`
    display: none;
    ${breakpoint('md')`
      display: flex;
      transform: scale(2.3);
      width: 100%;
        `}
    // width:inherit;
    // height:auto;
`


const Section01__TitleDiv = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  margin:0 auto;
    ${breakpoint('md')`
      width:100%;
    `}
    ${breakpoint('lg')`
      margin-top:50px;
      align-items:flex-start;
      justify-content:flex-start;
    `}
`
const Section01__Title = styled.div`
  ${BigTitle};
  color:${Themes.colors.black};
  text-align:center;
  margin:0 10% 40px 10%;
    ${breakpoint('md')`
        text-align:center; 
        font-size: 40px;
        margin:0 0 40px 0;  
    `}
    ${breakpoint('lg')`
    `}
`
const Section01__Text = styled.div`
  display:none;
    ${breakpoint('md')`
      display:flex;
      ${Text};
      font-size:${Themes.fontsize.p2} !important;
      line-height:22px !important;
      color:${Themes.colors.grey};
      font-weight:${Themes.fontWeight.light};
      text-align: center;
    `}
    ${breakpoint('lg')`
      max-width: 400px;
      font-size:${Themes.fontsize.p1} !important;
      line-height:28px !important; 
      text-align: left; 
    `}
`
const Section02 = styled.div`
`
const Section03 = styled.div`
  background-color:${Themes.colors.w_lightOrange};
`
const Container = styled.div`
  max-width:1366px;
  margin:0 auto;
  // padding:70px 14%;
  padding: ${Themes.paddings.mobileBottomMargin}
  ${breakpoint('lg')`
    padding:70px 15%;
    display:grid;
    grid-template-columns:25% 75%;
  `}
`
const Section__Title = styled.div`
  ${BigTitle};
  margin-bottom:10%;
  ${breakpoint('lg')`
    text-align:left;
  `}
`
const Section__Text = styled.div`
  ${Text};
  font-size:${Themes.fontsize.p3};
  line-height:23px;
  text-align: center;
  ${breakpoint('lg')`
    text-align:left;
  `}
`

export default AboutContainer;