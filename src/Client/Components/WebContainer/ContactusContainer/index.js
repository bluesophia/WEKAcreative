import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from '../../../../Assets/Styles/Themes';
/** Style **/ 
import {Container,
  Header,
  Header__Image,
  Header__Content,
  TopBgImg,
  TitleDiv,
  TitleDiv__Title,
  TitleDiv__Sm,
  TitleDiv__Textsm,
  Contents,
  FormDiv,
  Form,
  InputDiv,
  InputDiv__Left,
  InputDiv__Right,
  ButtonDiv,
  Form__Text
} from './style'

/** Components **/
import PhoneNumberInput from '../../../Components/Common/Input/PhoneNumberInput';
import FullNameInput from '../../../Components/Common/Input/FullNameInput';
import EmailInput from '../../../Components/Common/Input/EmailInput';
import MessageInput from '../../../Components/Common/Input/MessageInput';
import Button01 from '../../../Components/Common/Button/Button01';
import Button02 from '../../../Components/Common/Button/Button02';

/** Animation**/ 
import ScrollAnimation from 'react-animate-on-scroll';

/** Images **/
import Bg from '../../../../Assets/Images/ContactSection01Bg.png';
import Image from '../../../../Assets/Images/ContactSection01Image.svg';

class ContactusContainer extends Component {
    render(){
        return(
            <ThemeProvider theme={Themes}>
        <Container>
          <ScrollAnimation animateIn='fadeIn'>

          {/* Header */}
          <TopBgImg src={Bg}/>
          <Header>
            <Header__Content>
            <TitleDiv>
              <TitleDiv__Title>Get In Touch</TitleDiv__Title>
                <TitleDiv__Sm>
                  <Header__Image src={Image}/>
                  <TitleDiv__Textsm>Get in touch with us today to find out how we can help your business
                  work smarter and more efficiently.</TitleDiv__Textsm>
                </TitleDiv__Sm>
            </TitleDiv>
            </Header__Content>
          </Header>

          {/* Contents */}
          <Contents>
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
                  <Button02 value={'Experience WEKACREATIVE for yourself'}/>        
                </ButtonDiv>      
              </Form>
            </FormDiv>
          </Contents>
          
          </ScrollAnimation>
        </Container>
    </ThemeProvider>
        );
    }
}

export default ContactusContainer;