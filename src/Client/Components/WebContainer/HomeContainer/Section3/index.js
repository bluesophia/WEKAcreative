import React, { Component } from 'react';
import { Section03,
    Section03__Container,
    Br,
    Section03__Title,
    Section03__Text,
    Section03__Container__image,
    Section03__Container__imageSm
} from './style'


/** components **/
import YellowSpan from '../../../Common/YellowSpan';
import CardHover from '../../../Common/CardHover';  

 /** Animation**/ 
 import ScrollAnimation from 'react-animate-on-scroll';




class Section3 extends Component {
    render(){
        return(
            <Section03>
                <Section03__Container>
                    <Section03__Title>Some of our work</Section03__Title>
                    <YellowSpan />
                    <Section03__Text>Big or small it doesn’t matter <Br />- the companies we support have fantastic people and ideas to guide them.
                    </Section03__Text>
                </Section03__Container>
                <Section03__Container__image>
                <Section03__Container__imageSm>  
                    <CardHover />
                    <CardHover />
                    </Section03__Container__imageSm>  
                    <Section03__Container__imageSm>      
                    <CardHover />
                    <CardHover />
                </Section03__Container__imageSm>  
                </Section03__Container__image>
            </Section03>
           
        )
    }
}

export default Section3;