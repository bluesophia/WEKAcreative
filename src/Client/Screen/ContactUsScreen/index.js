import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';
import HeaderLine from '../../Components/Common/HeaderLine';

/** Components **/
import Text from '../../Components/Common/Text';
import BigTitle from '../../Components/Common/Title/BigTitle';
import TopBg from '../../../Assets/Images/contactUsBg.png';
import CallUsIcon from '../../../Assets/Images/phone.png';

import PhoneNumberInput from '../../Components/Common/Input/PhoneNumberInput';
import FullNameInput from '../../Components/Common/Input/FullNameInput';
import EmailInput from '../../Components/Common/Input/EmailInput';
import MessageInput from '../../Components/Common/Input/MessageInput';
import Button01 from '../../Components/Common/Button/Button01';
import Button02 from '../../Components/Common/Button/Button02';
// import MyMapComponent from './map';

/** Images **/
import Bg from '../../../Assets/Images/ContactSection01Bg.png';
import Image from '../../../Assets/Images/ContactSection01Image.svg';

class ContactUsScreen extends Component {
  render(){
    return(
      <ThemeProvider theme={Themes}>
        <Container>
          <TopBgImg src={Bg}/>
          <Header>
            <Header__Content>
            <TitleDiv>
              <TitleDiv__Title>Get In Touch</TitleDiv__Title>
              <Header__ImageDiv>
                <Header__Image src={Image}/>
                <TitleDiv__Textsm>Get in touch with us today to find out how we can help your business
                work smarter and more efficiently.</TitleDiv__Textsm>
              </Header__ImageDiv>
            </TitleDiv>
            </Header__Content>
          </Header>
          
          <Contents>
            {/* <MapDiv>
              <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-p5WQ9NQSErSYZB-U2anOUNKEGzWh-hU&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </MapDiv> */}
            <FormDiv>
              <Form>
                <InputDiv>
                  <InputDiv__Left>
                    <FullNameInput />
                    <PhoneNumberInput />
                    <EmailInput />
                  </InputDiv__Left>
                  <InputDiv__Right>
                    <MessageInput height='250px'/>
                  </InputDiv__Right>
                </InputDiv>
                <ButtonDiv>
                  <Button01 value={'Contact Our Software Experts'}/>
                  <Form__Text>Or Try Our Software For Free</Form__Text>
                  <Button02 value={'Experience EasyForms for yourself'}/>        
                </ButtonDiv>      
              </Form>
            </FormDiv>
          </Contents>
        </Container>
    </ThemeProvider>
    )
  }
}
const Container = styled.div`
  // background-color:${Themes.colors.veryLightGrey};
`
const Header = styled.div`
  padding:60px 1em 18px 1em;
  background:url(${Bg});
  background-size:100% 100%;
  box-shadow: 0 5px 8px -4px rgba(0,0,0,0.2);
    ${breakpoint('lg')`
    background:none;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding:70px 0 55px 0;
    max-width:1366px;
    margin:0 auto;
    `}
`
const Header__ImageDiv = styled.div`
  // display:none;
  z-index:1;
  transform: scale(0.9);
    ${breakpoint('md')`
    display: flex;
    flex-direction: column-reverse;
  `}
    ${breakpoint('lg')`
      display:block;
    `}
`
const Header__Image = styled.img`
    ${breakpoint('md')`
      margin-top: 40px;
      transform: scale(0.9);
    `}
`
const Header__Content = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  ${breakpoint('lg')`
    align-items:flex-start;
    margin-left:60px;
  `}
`

const TopBgImg = styled.img`
  display:none;
    ${breakpoint('lg')`
      display:block;
      width:100vw;
      height:648px;
      position:absolute;
      top:120;
    `}
`
const TitleDiv = styled.div`
  display:flex;
  flex-direction:column;
  z-index:1;
  ${breakpoint('lg')`
    align-items:flex-start;
    margin-bottom:100px;
  `}
`
const TitleDiv__Title = styled.div`
  ${BigTitle};
  margin-bottom:10px;
  ${breakpoint('md')`
  `}
`
const TitleDiv__Text = styled.div`
  // display:none;
  ${breakpoint('lg')`
    display:block;
    color:white;
    font-size:${Themes.fontsize.p2};
    line-height:25px;
    font-weight:${Themes.fontWeight.light};
    width:470px;
  `}
`
const TitleDiv__Textsm = styled.div`
    color:${Themes.colors.grey};
    text-align: center;
    font-size:${Themes.fontsize.h4};
    padding: 4%;
    margin-top:22px;
    line-height:26px;
    ${breakpoint('md')`
    display:block;
    font-size:${Themes.fontsize.h4};
    line-height:25px;
    font-weight:${Themes.fontWeight.light};
    text-align:center;
    margin:0;
    padding: 0 10% 4% 10%;
    `}
    ${breakpoint('lg')`
    font-size:${Themes.fontsize.p2} !important;
    line-height:25px;  
    padding:0 3%;
    `}
 `   
const CallUsDiv = styled.div`
  display:flex;
  align-items:center;
  flex-direction:row;
  z-index:1;
`
const Icon = styled.img`
  margin-right:2px;
`
const CallUs = styled.span`
  font-size:${Themes.fontsize.h4};
  color:white;
  margin-right:10px;
`
const PhoneNo = styled.span`
  font-size:${Themes.fontsize.h4};
  color:${Themes.colors.yellow};
`
const Contents = styled.div`
    margin:0 auto;
    display:flex;
    flex-direction:column;
    ${breakpoint('lg')`
      flex-direction:column-reverse;
    `}
`
const FormDiv = styled.div`
  ${breakpoint('lg')`
    z-index:1;
    width:1050px;
    margin:0 auto 100px auto;
  `}
`
const Form = styled.div`
  height:auto;
  background-color:white;
  margin-top:10px;
  padding:60px 8%;
    ${breakpoint('md')`
      padding:60px 15%;
    `}
    ${breakpoint('lg')`
      padding:60px 8%;
      border-radius:50px;
    `}
`
const InputDiv = styled.div`
  display:flex;
  flex-direction:column;
  ${breakpoint('lg')`
  `}
`
const InputDiv__Left = styled.div`
  display:flex;
  flex-direction:column;
  ${breakpoint('lg')`
  margin-bottom:50px;  
`}
`
const InputDiv__Right = styled.div``
const ButtonDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  ${breakpoint('lg')`
    width:60%;  
    margin:0 auto;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  `}
`
const Form__Text = styled.div`
  margin:20px auto 20px auto;
  color:${Themes.colors.black};
  font-size:${Themes.fontsize.p2};
  font-weight:${Themes.fontWeight.black};
`
const MapDiv = styled.div`
  position:relative;
  height:300px;
  ${breakpoint('lg')`
   height:500px;
  `}
`
export default ContactUsScreen;