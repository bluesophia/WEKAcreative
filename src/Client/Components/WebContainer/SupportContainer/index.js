import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';


/** components **/
import Text from '../../Common/Text';
import BigTitle from '../../Common/Title/BigTitle.js';

/** Images **/
import HomeSection02BgSm from '../../../../Assets/Images/HomeSection02BgSm.svg';
import SupportSection01BgLg from '../../../../Assets/Images/SupportSection01BgLg.png';
import Section01Bg from '../../../../Assets/Images/AboutSectionBgMd.png';
import Image from '../../../../Assets/Images/SupportSection01Image.svg';

import {  CompanyNameInput,
          EmailInput,
          MessageInput,
          PhoneNumberInput,
          SupportTypeInput,
          FullNameInput }from '../../Common/Input';
import Button01 from '../../Common/Button/Button01';

const Title = css`
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h2};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    line-height:30px;
    text-transform:uppercase;
    letter-spacing:5px;
`
class SupportContainer extends Component{
  constructor(props){
    super(props);
    this.state = {value: ''};

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    alert('submitted' + this.state.value);
    event.preventDefault();
  }
  render(){
    return(
        <ThemeProvider theme={Themes}>
          <Support>
              <Container>
                  {/* Image div */}
                  <Section01__Div>
                  <Section01>
                    <TitleDiv>
                      <TitleDiv__Title>Submit a support ticket</TitleDiv__Title>
                      <TitleDiv__Text>Please complete the form below which will direct your request to the appropriate member of the team. 
                        This ensures greater efficiency around response times and also ensures processes are followed.
                        <br /><br />
                        We aim to respond to support requests within 24 hours on regular business days, however, 
                        depending on the scale of your request this could take slightly longer.</TitleDiv__Text>
                    </TitleDiv>
                  </Section01>
                  <ImageDiv>
                    <TopBgImg src={Image}/>
                    <TitleDiv__Textsm>Please complete the form below which will direct 
                        your request to the appropriate member of the team. This ensures greater efficiency around response times and 
                        also ensures processes are followed.</TitleDiv__Textsm>
                  </ImageDiv>
                  </Section01__Div>
                  {/* Form div */}
                  <Section02>
                  <FormDiv>
                    <Form onSubmit={this._handleSubmit}>
                      <InputDiv>
                        <InputDiv__Left>
                          <FullNameInput />
                          <CompanyNameInput />
                          <PhoneNumberInput />
                          <EmailInput />
                          <MessageInput />
                          {/* <SupportTypeInput /> */}
                        </InputDiv__Left>
                      </InputDiv>
                      <ButtonDiv>
                        <Button01 value="SUBMIT"/>
                      </ButtonDiv>      
                    </Form>
                  </FormDiv>
                  </Section02>
              </Container>
            </Support>
          </ThemeProvider>
          )
        }
      }
const Support = styled.div`
    margin:0;
    background: url('${HomeSection02BgSm}');
    background-position:center top;
    background-repeat:no-repeat;
    background-size: 107% auto;
    padding:18% 8%;
    ${breakpoint('md')`
    background: url('${Section01Bg}');
    background-position:left top;
    background-repeat:no-repeat;
    background-size:100% 79%;  
    padding:10% 10%;   
    `}
    ${breakpoint('lg')`
        background: url('${SupportSection01BgLg}');
        background-position:center top;
        background-repeat:no-repeat;
        background-size:100% 55%;
    `}
`
const Container = styled.div`
    ${breakpoint('md')`
      // max-width:1366px;
      // display:grid;
      // grid-template-columns:40% 60%;
      // margin:0 auto;
      disply:flex;
      flex-direction: column;
    `}
    ${breakpoint('lg')`
        flex-direction: row;
      `}
`
const Section01 = styled.div`
      ${breakpoint('md')`
        display: flex;
        flex-direction: column;
      `}
      // ${breakpoint('lg')`
      //   display: flex;
      //   flex-direction: row;
       `}
`
const Section01__Div = styled.div`
      ${breakpoint('lg')`
      display: flex;
      flex-direction: row-reverse;
      `}
`
const Section02 = styled.div`
`
const ImageDiv = styled.div`
    margin-bottom:40px;
    ${breakpoint('md')`
    margin-bottom:0;
    `}
    ${breakpoint('lg')`
    grid-row: 1 / 3;
    justify-content:flex-start; 
    `}
`
const TopBgImg = styled.img`
  height:auto;
  width:93%;
  margin-left:22px;
    ${breakpoint('md')`
    margin:0 auto;
    // margin-top: 100px;
    // margin-left: 177px;
    transform: scale(1.5);
    margin-top: 30px;
    margin-left: 45px;
    text-align:center;
    transform: scale(0.9);
  `}
    ${breakpoint('lg')`
    // margin-top: 91px;
    // margin-left: 76px;
    // text-align: center;
    // transform: scale(3.5);
    margin-top: 91px;
    margin-left: 120px;
    text-align: center;
    -webkit-transform: scale(3.5);
    -ms-transform: scale(3.5);
    transform: scale(2.9);
    `}
`
const TitleDiv = styled.div`
  ${breakpoint('md')`
    order:2;  
    display:flex;
    flex-direction:column;
  `}
  ${breakpoint('lg')`
    margin:0 auto;
    margin-left: 200px;
  `}
`
const TitleDiv__Title = styled.div`
  ${BigTitle};
  font-size:29px;
  margin-bottom:40px;
  ${breakpoint('md')`
    text-align:center;
    margin:0px 20px 20px 0px; 
  `}
  ${breakpoint('lg')`
  padding:0 3%;
`}
`
const TitleDiv__Text = styled.div`
  display:none;
  ${breakpoint('md')`
    display:flex;
    color:${Themes.colors.grey};
    font-size:${Themes.fontsize.h4};
    line-height:25px;
    font-weight:${Themes.fontWeight.regular};
    text-align:center;
    padding: 0 24px;
  `}
  ${breakpoint('lg')`
    font-size:${Themes.fontsize.p2} !important;
    text-align:left;
    line-height:25px;  
    padding:0 3%;
  `}
`
const TitleDiv__Textsm = styled.div`
    color:${Themes.colors.grey};
    text-align: center;
    font-size:${Themes.fontsize.h4};
    padding: 4%;
    ${breakpoint('md')`
    display:none;
    color:white;
    font-size:${Themes.fontsize.p3};
    line-height:18px;
    font-weight:${Themes.fontWeight.light};
    text-align:left;
    `}
    ${breakpoint('lg')`
    font-size:${Themes.fontsize.p2} !important;
    line-height:25px;  
    padding:0 3%;
    `}
`

const FormDiv = styled.div` 
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    margin:0 -5%;
    ${breakpoint('md')`
    // order:3;  
    // grid-column:1/2;
    margin:0;
    `}
      ${breakpoint('lg')`
        // grid-column:unset;
        margin: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    `}
`
const Form = styled.div`
  height:auto;
  padding:30px 8% 30px 8%;
  border-radius:25px;
    ${breakpoint('md')`
      padding-top: 0;
      `}
    ${breakpoint('lg')`
    // margin-top:30px;
    // padding: 30px 20% 30px 20%;
    width: 45%
    background-color:white;
    box-shadow:0 0 10px rgba(0,0,0,0.2);
    margin-top: 10%;
  `}
`
const InputDiv = styled.div`
  margin-bottom:50px;
  display:flex;
  flex-direction:column;
  ${breakpoint('lg')`
        margin-bottom:0;
 `}
`
const InputDiv__Left = styled.div`
   ${breakpoint('lg')`
        // margin-bottom:50px;
        margin-top: 10%;
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
  margin:25px auto 10px auto;
  color:${Themes.colors.blueLight};
  font-size:${Themes.fontsize.p2};
  font-weight:${Themes.fontWeight.black};
`

export default SupportContainer;