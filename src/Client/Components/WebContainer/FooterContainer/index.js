import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../Assets/Styles/Themes';
import breakpoint from 'styled-components-breakpoint';
import Logo from '../../../../Assets/Images/logo_color.png';
import { Link } from 'react-router-dom';

//component
import Button03 from '../../../Components/Common/Button/Button03';

class FooterContainer extends Component {
    render() {
      return (
        <ThemeProvider theme={Themes}> 
        <Footer>
          <Container>
            <FooterTop>
              <ButtonDiv>
                <ButtonLink to='/contact'>
                    <Button03 value={'Contact us'}/>
                </ButtonLink>
                </ButtonDiv>
                <FooterBox1>
                <FooterRightContainer>
                  {/* Logo & SNS */}
                  {/* <FooterBox3> */}
                    <LogoImg src={Logo}/>
                    <Box>
                      <Sns href="#">
                          <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" />
                      </Sns>
                      <Sns href="#">
                          <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
                      </Sns>
                      <Sns href="#">
                          <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                    </Sns>
                    </Box>
                    <StyledLink__Div2>
                      <StyledLink to='/'>Home /</StyledLink>
                      <StyledLink to='/about'> About /</StyledLink>
                      <StyledLink to='/support'> Support /</StyledLink>
                      {/* <StyledLink to='/blog'> Solutions /</StyledLink> */}
                      <StyledLink to='/contact'> Contact Us</StyledLink>
                    </StyledLink__Div2>
                {/* </FooterBox3> */}
                    <FooterRightContainer>
                    <FooterTitle>CONTACT US</FooterTitle>
                    <FooterText>09 234 2345</FooterText>
                    <FooterText>hello@wekacreative.co.nz</FooterText>
                    <FooterTitle>SITEMAP</FooterTitle>
                    <StyledLink__Div>
                      <StyledLink to='/'>Home</StyledLink>
                      <StyledLink to='/about'>About</StyledLink>
                      <StyledLink to='/support'>Support</StyledLink>
                      {/* <StyledLink to='/blog'>Solutions</StyledLink> */}
                      <StyledLink to='/contact'>Contact Us</StyledLink>
                    </StyledLink__Div>
                    </FooterRightContainer>
                    
                </FooterRightContainer>
              </FooterBox1>
                
              {/* <FooterBox2>
                <FooterRightContainer>
                    <StyledLink to='/'>Home</StyledLink>
						        <StyledLink to='/about'>/ Our Work</StyledLink>
						        <StyledLink to='/support'>/ Services</StyledLink>
						        <StyledLink to='/blog'>/ Solutions</StyledLink>
						        <StyledLink to='/contact'>/ Contact Us</StyledLink>
                </FooterRightContainer>
              </FooterBox2> */}

            </FooterTop>

            <FooterBottom>
                <FooterBottomText>WEKAcreative complies with ISO 22301 and ISO IEC 27001</FooterBottomText>
                {/* <FooterBottomText>Admin Page</FooterBottomText> */}
                <FooterBottomText>ⓒ2018 WEKAcreative.co.nz</FooterBottomText>
            </FooterBottom>
          </Container>
        </Footer>
        </ThemeProvider> 
      );
    }
  }
  
  const Box = styled.div`
      display: flex;
      justify-content: center;
      ${breakpoint('md')`
        float: right;
        margin-top: -12%;
      `};
      ${breakpoint('lg')`
      // justify-content: flex-end;
      `};
  `;
  
  const Sns = styled.a`
    color:${Themes.colors.grey};
    font-size: 1em;
    padding: 1.5em 1.5em;

      ${breakpoint('md')`
      padding: 0 1.1em;
      `};
      ${breakpoint('lg')`
      padding: 0 1.5em;
      `};
  `;

const Footer = styled.div`
  // height: 770px;
  // flex-direction: row;
  // align-items: space-between;
  font-family: Lato;
  background: ${Themes.colors.w_mint};
  padding: 0 10%;
  line-height:1.5em;
  ${breakpoint('md')`
    // width: 100%;
  `}
  ${breakpoint('lg')`
  `}
`;

const Container = styled.div`
  margin:0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${breakpoint('lg')`
      max-width: 1366px;
  `}
`

//footer top css
const FooterTop = styled.div`
padding-top: 30px;
flex-direction: column;
  
  ${breakpoint('md')`
  display: flex;
  justify-content: space-between;
  padding-top: 0;
  `};
  ${breakpoint('lg')`
  padding-top:none;
  `};
`;

const FooterBox1 = styled.div`
// display: flex;
// flex-direction: column;

${breakpoint('md')`
// flex-direction: row;
`};
${breakpoint('lg')`
// flex-direction: row;
`};
`;

// const FooterBox2 = FooterBox1.extend`

// ${breakpoint('md')`
// order:2;
// `};
// `;

const FooterBox3 = FooterBox1.extend`

${breakpoint('md')`
order:3;
`};

`;

const FooterRightContainer = styled.div`
// display: flex;
// justify-content: row;
text-align:center;

${breakpoint('md')`
  text-align:left;
`};
${breakpoint('lg')`
  float: left;
  width: 100%;
`};
`;

const FooterTitle = styled.div`
font-size: ${Themes.fontsize.h4};
font-weight: ${Themes.fontWeight.bold};
text-align:center;
margin: 0.5em 0 0.5em 0;

color: ${Themes.colors.yellow};

  ${breakpoint('md')`
  display: none;
    `};
  ${breakpoint('lg')`
  display: none;
    `};
  `;

const FooterTitleDisplay = FooterTitle.extend`
display:none;

${breakpoint('md')`
display: block;
`};
`
const LogoImg = styled.img`
	width:176px;
	// float:left;
  position:relative;
  ${breakpoint('md')`
    display: flex;
    margin-left: -21px;
	`}
	${breakpoint('lg')`
		width:160px;
	`}
`;

const FooterText = styled.span`
  font-size: ${Themes.fontsize.h4};
  display:block;
  color: ${Themes.colors.grey};
  font-weight: ${Themes.fontWeight.light};
  line-height: 1.8;
  ${breakpoint('md')`
  font-size: 15px;
  font-weight: ${Themes.fontWeight.regular};
  `};
`;

const FooterTextAddress = FooterText.extend`
padding-top: 1.25em;
`;
const StyledLink__Div = styled.div`
  ${breakpoint('md')`
  display: none;
  `};
`
const StyledLink__Div2 = styled.div`
  display: none;
  ${breakpoint('md')`
  display: flex;
  `};
`
const StyledLink = styled(Link)`
  color: ${Themes.colors.grey};
  font-size: ${Themes.fontsize.h4};
  display:block;
  text-decoration: none;
  font-weight: ${Themes.fontWeight.light};
  line-height:1.8;
  ${breakpoint('md')`
  font-size: 15px;
  font-weight: ${Themes.fontWeight.regular};
  `};
`;

//footer bottom css
const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5em;
  padding-bottom: 5%;
  text-align: center;
  ${breakpoint('md')`
  justify-content: space-between;
  text-align: left;
  `};
`;

const FooterBottomText = styled.span`
flex-direction: column;
font-size: ${Themes.fontsize.p4};
font-weight:${Themes.fontWeight.light};
text-align: center;
padding: 0;
color: ${Themes.colors.grey};
  ${breakpoint('md')`
    text-align: left;
    font-size: 15px;
    font-weight: ${Themes.fontWeight.regular};
      `}
`;

//button
const ButtonDiv = styled.div`
  transform: scale(0.9);
  padding: 10%;
    ${breakpoint('md')`
      padding: 5% 10% 5% 10%;
    `}
    ${breakpoint('lg')`
    `}
`
const ButtonLink = styled(Link)`
        cursor:'pointer';

`


export default FooterContainer;