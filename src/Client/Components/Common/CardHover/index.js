import React, { Component } from 'react';
import { 
    Section03__Container__image,
    Section03__Container__imageSm,
    Section03__Image1,
    Section03__Image1__Hover__Div,
    Section03__Image1__Hover
} from './style'

import SomeofOurWorkPassafe from '../../../../Assets/Images/SomeofOurWorkPassafe.svg';
import SomeofOurWorkPassafe2 from '../../../../Assets/Images/SomeofOurWorkPassafe2.svg';
class CardHover extends Component {
    render(){
        return(
            <Section03__Container__image>
                <Section03__Container__imageSm>   
                    <Section03__Image1 src={SomeofOurWorkPassafe}/>
                    <Section03__Image1__Hover__Div>
                        <Section03__Image1__Hover src={SomeofOurWorkPassafe2}/>
                    </Section03__Image1__Hover__Div>
                </Section03__Container__imageSm> 
            </Section03__Container__image>
        );
    }
}

export default CardHover;