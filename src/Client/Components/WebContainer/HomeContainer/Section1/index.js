import React, { Component } from 'react';
import Button01 from '../../../Common/Button/Button01';
import {Br, 
    Container, 
    Section01, 
    Section01__Image, 
    MainImage, 
    Section01__TitleDiv, 
    StyledTitle, 
    Section01__Text,
    ButtonDiv, 
    ButtonLink
} from './style'
/** Animation**/ 
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
/** Images **/
import mainImage from '../../../../../Assets/Images/mainImage.svg';

class Section1 extends Component{
    render(){
        return(
               <Section01>
                    <Container>
                    <ScrollAnimation animateIn="fadeIn">
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
                        </ScrollAnimation>
                    </Container>
                </Section01>         
        )
    }
}

export default Section1;