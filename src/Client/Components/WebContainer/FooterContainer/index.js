import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../Assets/Styles/Themes';
import breakpoint from 'styled-components-breakpoint';
import Logo from '../../../../Assets/Images/logo_color.png';
import { Link } from 'react-router-dom';
import { Footer,
  Container, 
  FooterTop,
  FooterBox1,
  FooterRightContainer,
  LogoImg,
  Box,
  Sns,
  FooterTitle,
  FooterText,
  FooterBottom,
  FooterBottomText,
  StyledLink__Div,
  StyledLink__Div2,
  StyledLink,
  ButtonDiv, 
  ButtonLink
} from './style';
import LinkButton from '../../../Components/Common/Button/LinkButton';

class FooterContainer extends Component {
    _ScrollTop = () => {
      window.scrollTo(0, 0);
    }
    render() {
      return (
        <ThemeProvider theme={Themes}> 
        <Footer>
          <Container>
            <FooterTop>
              <ButtonDiv>
                <ButtonLink to='/contact'>
                    <LinkButton value={'Contact us'}/>
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
                      <StyledLink to='/' onClick={this._ScrollTop}>Home</StyledLink>
                      <StyledLink to='/about' onClick={this._ScrollTop}>About</StyledLink>
                      <StyledLink to='/support' onClick={this._ScrollTop}>Support</StyledLink>
                      {/* <StyledLink to='/blog'>Solutions</StyledLink> */}
                      <StyledLink to='/contact' onClick={this._ScrollTop}>Contact Us</StyledLink>
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
                {/* <FooterBottomText>Admin Page</FooterBottomText> */}
                <FooterBottomText>ⓒ2018 wekacreative.co.nz</FooterBottomText>
            </FooterBottom>
          </Container>
        </Footer>
        </ThemeProvider> 
      );
    }
  }
  
  
export default FooterContainer;