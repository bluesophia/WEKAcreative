import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../Assets/Styles/Themes';
import breakpoint from 'styled-components-breakpoint';
import Logo from '../../../../Assets/Images/logo_color.png';
import { Link } from 'react-router-dom';

class FooterContainer extends Component {
    render() {
      return (
        <ThemeProvider theme={Themes}> 
        <Footer>
          <Container>
            <FooterTop>
              <FooterBox1>
                <FooterRightContainer>
                  {/* Logo & SNS */}
                  <FooterBox3>
                    <LogoImg src={Logo}/>
                    <Box>
                      <Sns href="#">
                          <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" />
                      </Sns>
                      <Sns href="#">
                          <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                      </Sns>
                      <Sns href="#">
                          <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
                    </Sns>
                    </Box>
                </FooterBox3>
                    <FooterRightContainer>
                    <FooterTitle>CONTACT US</FooterTitle>
                    <FooterText>09 234 2345</FooterText>
                    <FooterText>hello@wekacreative.co.nz</FooterText>
                    <FooterTitle>SITEMAP</FooterTitle>
                    <StyledLink to='/'>Home</StyledLink>
						        <StyledLink to='/about'>Our Work</StyledLink>
						        <StyledLink to='/support'>Services</StyledLink>
						        <StyledLink to='/blog'>Solutions</StyledLink>
						        <StyledLink to='/contact'>Contact Us</StyledLink>
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
      // justify-content: flex-start;
  `};
  `;
  
  const Sns = styled.a`
    color:${Themes.colors.grey};
    font-size: 1em;
    padding: 1.5em 1.5em;

      ${breakpoint('md')`
      padding: 0 0.5em;
      `};
      ${breakpoint('lg')`
      padding: 0 0.8em;
      `};
  `;

const Footer = styled.div`
  height: 659px;
  // flex-direction: row;
  // align-items: space-between;
  font-family: Lato;
  background: ${Themes.colors.w_mint};
  padding: 0 10%;
  line-height:1.5em;
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
  flex-direction: row;
  justify-content: space-between;
  `};
`;

const FooterBox1 = styled.div`
// display: flex;
// flex-direction: column;

${breakpoint('md')`
flex-direction: row;
order:1;
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
`;

const FooterTitle = styled.div`
font-size: ${Themes.fontsize.h4};
font-weight: ${Themes.fontWeight.bold};
text-align:center;
margin: 0.5em 0 0.5em 0;

color: ${Themes.colors.yellow};

${breakpoint('md')`
font-size: 0.8em;
margin: 0 1em 0 0;
text-align:left;
  `};
${breakpoint('lg')`
margin: 0 1em 0 0;
text-align:left;
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
`;

const FooterTextAddress = FooterText.extend`
padding-top: 1.25em;
`;

const StyledLink = styled(Link)`
  color: ${Themes.colors.grey};
  font-size: ${Themes.fontsize.h4};
  display:block;
  text-decoration: none;
  font-weight: ${Themes.fontWeight.light};
  line-height:1.8;
`;

//footer bottom css
const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5em;
  text-align: center;
  ${breakpoint('md')`
  flex-direction: row;
  justify-content: space-between;
  `};
`;

const FooterBottomText = styled.span`
flex-direction: column;
font-size: ${Themes.fontsize.p4};
font-weight:${Themes.fontWeight.light};
text-align: center;
padding: 0;
color: ${Themes.colors.grey};
`;

export default FooterContainer;