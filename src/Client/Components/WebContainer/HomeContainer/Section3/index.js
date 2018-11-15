import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
/** components **/
import BigTitle from '../../../Common/Title/BigTitle';
import Text from '../../../Common/Text';
import YellowSpan from '../../../Common/YellowSpan';
import SomeofOurWorkToyota from '../../../../../Assets/Images/SomeofOurWorkToyota.svg';
const Images  = [
    require("../../../../../Assets/Images/SomeofOurWorkPassafe.svg"),
    require("../../../../../Assets/Images/SomeofOurWorkRugdoctor.svg"),
    require("../../../../../Assets/Images/SomeofOurWorkMethTesting.svg"),
    require("../../../../../Assets/Images/SomeofOurWorkToyota.svg"),
    require("../../../../../Assets/Images/SomeofOurWorkPassafe2.svg"),
    require("../../../../../Assets/Images/SomeofOurWorkRugdoctor2.svg"),
    require("../../../../../Assets/Images/SomeofOurWorkMethTesting3.svg"),
    require("../../../../../Assets/Images/SomeofOurWorkToyota2.svg"),
]

class Section3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: Images,
            SomeofOurWorkPassafe: Images[0],
            SomeofOurWorkRugdoctor: Images[1],
            SomeofOurWorkMethTesting: Images[2],
            SomeofOurWorkToyota: Images[3]

        };
        // this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOver1 = this.handleMouseOver1.bind(this);
        this.handleMouseOver2 = this.handleMouseOver2.bind(this);
        this.handleMouseOver3 = this.handleMouseOver3.bind(this);
        this.handleMouseOver4 = this.handleMouseOver4.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
    handleMouseOut() {
        this.setState({
            SomeofOurWorkPassafe: Images[0],
            SomeofOurWorkRugdoctor: Images[1],
            SomeofOurWorkMethTesting: Images[2],
            SomeofOurWorkToyota: Images[3]
        })
    }
    handleMouseOver1() {
        this.setState({
            SomeofOurWorkPassafe: Images[4]
        })
    }
    handleMouseOver2() {
        this.setState({
            SomeofOurWorkRugdoctor: Images[4]
        })
    }
    handleMouseOver3() {
        this.setState({
            SomeofOurWorkMethTesting: Images[6]
        })
    }
    handleMouseOver4() {
        this.setState({
            SomeofOurWorkToyota: Images[7]
        })
    }
    render(){
        return(
            <Section03>
                <Section03__Container>
                    <Section03__Title>Some of our work</Section03__Title>
                    <YellowSpan />
                    <Section03__Text>Big or small it doesn’t matter - the companies we support have fantastic people and ideas to guide them. <Br />Big or small it doesn’t matter - the companies we support have fantastic people and ideas to guide them.
                    </Section03__Text>
                </Section03__Container>
                <Section03__Container__image>
                    <Section03__Container__imageSm>   
                        <Section03__Image src={this.state.SomeofOurWorkPassafe} 
                            onMouseOver={this.handleMouseOver1}
                            onMouseOut={this.handleMouseOut}
                        />
                        <Section03__Image src={this.state.SomeofOurWorkRugdoctor} 
                            onMouseOver={this.handleMouseOver2}
                            onMouseOut={this.handleMouseOut}
                        />
                    </Section03__Container__imageSm> 
                    <Section03__Container__imageSm> 
                        <Section03__Image src={this.state.SomeofOurWorkMethTesting} 
                            onMouseOver={this.handleMouseOver3}
                            onMouseOut={this.handleMouseOut}
                        />
                        <Section03__Image src={this.state.SomeofOurWorkToyota} 
                            onMouseOver={this.handleMouseOver4}
                            onMouseOut={this.handleMouseOut}
                        />
                    </Section03__Container__imageSm> 
                </Section03__Container__image>
            </Section03>
        )
    }
}
const Br = styled.br`
    display:none;
    ${breakpoint('md')`
    display:block;
    `}
    ${breakpoint('lg')`
    display:block;
    `}
`
const Section03 = styled.div`
    // padding: ${Themes.paddings.mobile};
    padding: 15% 10% 10% 10%;
    ${breakpoint('md')`
    padding: ${Themes.paddings.tablet};
    margin-bottom: 150px;
    `}
    ${breakpoint('lg')`
        padding: ${Themes.paddings.desktop};
        // margin-bottom: 20%;
    `}
`
const Section03__Container = styled.div`
`
const Section03__Container__image = styled.div`
    margin:0 auto;
    ${breakpoint('sm')`
    `}
    ${breakpoint('md')`
        padding-top: 8%;
        margin-bottom: 10%;
        position: relative;
        // transform: scale(1.35);
    `}
    ${breakpoint('lg')`
        padding-top: 0;
        margin-bottom: 0;
        // transform: scale(1.8);
    `}
`
const Section03__Container__imageSm = styled.div`
    ${breakpoint('md')`
    display:flex;
    justify-content: center;
    align-items: center;
    `}
    
`
const Section03__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
    `}
`
const   Section03__Text = styled.div`
    margin-top:9px;
    margin-bottom: 30px;
    ${Text};
    color:${Themes.colors.grey};
    text-align:center;
        ${breakpoint('md')`
            font-size:${Themes.fontsize.p1}
            line-height:26px;
            margin-bottom: 10%;
        `}
        ${breakpoint('lg')`
            
        `}
`
const Section03__ImageDiv = styled.div`
`
const Section03__Image = styled.img`

    // margin: -2px 0;
    &:hover {
        background: url('${SomeofOurWorkToyota}');
    }
    ${breakpoint('md')`
        width: 295px;
    `}
    ${breakpoint('lg')`
    // transform: scale(1.5);
    // margin: 0 0 10% 16%; 
    width:585px;
    `}
`
export default Section3;