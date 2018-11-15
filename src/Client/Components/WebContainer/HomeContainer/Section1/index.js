import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../../Assets/Styles/Themes';
import Button01 from '../../../Common/Button/Button01';
import { Link } from 'react-router-dom';
import {Br, Container, Section01, Section01__Image, MainImage, Section01__TitleDiv, StyledTitle, Section01__Text,
    ButtonDiv, ButtonLink, SubTitle } from './style'

/** Images **/
import HomeSection01BgMd from '../../../../../Assets/Images/HomeSection01BgMd.png';
import HomeSection02BgMd from '../../../../../Assets/Images/HomeSection02BgMd.png';
import mainImage from '../../../../../Assets/Images/mainImage.svg';

/** components **/
import Title from '../../../Common/Title/Title';
import BigTitle from '../../../Common/Title/BigTitle';

class Section1 extends Component{
    render(){
        return(
               <Section01>
                    <Container>
                        <Section01__Image><MainImage src={mainImage}/></Section01__Image>
                        <Section01__TitleDiv>
                            <StyledTitle>Accelerate your business <Br />processes through innovative <Br />software design</StyledTitle>
                            <Section01__Text>Harness the power of cloud-based custom software. Transform how you do business through systems designed with your stakeholders and processes in mind.
                            </Section01__Text>
                            <ButtonDiv>
                                <ButtonLink to='/contact'>
                                    <Button01 value={'Contact us'}/>
                                </ButtonLink>
                            </ButtonDiv>
                        </Section01__TitleDiv>
                    </Container>
                </Section01>         
        )
    }
}

export default Section1;