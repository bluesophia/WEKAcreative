import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';  
import { Section03,
    Section03__Container,
    Section03__Container__image,
    Section03__Container__imageSm,
    Section03__Image1,
    Section03__Image2,
    Section03__Image3,
    Section03__Image4,
    AnimationBox1,
    AnimationBox2,
    AnimationBox3,
    AnimationBox4,
    Br,
    Section03__Title,
    Section03__Text
} from './style'
// import posed from 'react-pose';
// import { tween } from "popmotion";

/** components **/
import YellowSpan from '../../../Common/YellowSpan';
// import AnimationBox from '../../../../Function/AnimationBox';
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
            SomeofOurWorkToyota: Images[3],
            hovering: false,
            hovering2: false,
            hovering3: false,
            hovering4: false,

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
    handleMouseOver1 = () => (
        this.setState({
            // SomeofOurWorkPassafe: Images[4]
            hovering: !this.state.hovering
        })
    )
        
    handleMouseOver2() {
        this.setState({
            hovering2: !this.state.hovering2
        })
    }
    handleMouseOver3() {
        this.setState({
            hovering3: !this.state.hovering3
        })
    }
    handleMouseOver4() {
        this.setState({
            hovering4: !this.state.hovering4
        })
    }
    render(){
        console.log(this.state.hovering);
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
                        {/* <Section03__Image src={this.state.SomeofOurWorkPassafe} 
                            onMouseOver={this.handleMouseOver1}
                            onMouseOut={this.handleMouseOut}
                        /> */}
                        <Section03__Image1
                        onMouseEnter={this.handleMouseOver1}
                        onMouseOut={this.handleMouseOut}
                        >
                        { this.state.hovering ? 
                        (<Motion
                            defaultStyle={{ scaleY: 1 }}
                            style={{ scaleY: spring(0) }}
                        >
                            {(style) => (
                            <AnimationBox1 
                                scaleY={style.scaleY}
                                style={{ 
                                    transform: `scaleY(${style.scaleY})`,
                                }}
                            />
                            )}
                        </Motion>) 
                        :
                        (<Motion
                            defaultStyle={{ scaleY: 0 }}
                            style={{ scaleY: 1 }}
                        >
                            {(style) => (
                            <AnimationBox1 
                                scaleY={style.scaleY}
                                style={{ 
                                    transform: `scaleY(${style.scaleY})`,
                                }}
                            />
                            )}
                        </Motion>)  }
                        </Section03__Image1>
                        <Section03__Image2
                        onMouseEnter={this.handleMouseOver2}
                        onMouseOut={this.handleMouseOut}
                        >
                        { this.state.hovering2 ? 
                        (<Motion
                            defaultStyle={{ scaleY: 1 }}
                            style={{ scaleY: spring(0) }}
                        >
                            {(style) => (
                            <AnimationBox2 
                                scaleY={style.scaleY}
                                style={{ 
                                    transform: `scaleY(${style.scaleY})`,
                                }}
                            />
                            )}
                        </Motion>) 
                        :
                        (<Motion
                            defaultStyle={{ scaleY: 0 }}
                            style={{ scaleY: 1 }}
                        >
                            {(style) => (
                            <AnimationBox2 
                                scaleY={style.scaleY}
                                style={{ 
                                    transform: `scaleY(${style.scaleY})`,
                                }}
                            />
                            )}
                        </Motion>)  }
                        </Section03__Image2>
                        </Section03__Container__imageSm>  
                        <Section03__Container__imageSm> 
                        <Section03__Image3
                        onMouseEnter={this.handleMouseOver3}
                        onMouseOut={this.handleMouseOut}
                        >
                        { this.state.hovering3 ? 
                        (<Motion
                            defaultStyle={{ scaleY: 1 }}
                            style={{ scaleY: spring(0) }}
                        >
                            {(style) => (
                            <AnimationBox3 
                                scaleY={style.scaleY}
                                style={{ 
                                    transform: `scaleY(${style.scaleY})`,
                                }}
                            />
                            )}
                        </Motion>) 
                        :
                        (<Motion
                            defaultStyle={{ scaleY: 0 }}
                            style={{ scaleY: 1 }}
                        >
                            {(style) => (
                            <AnimationBox3 
                                scaleY={style.scaleY}
                                style={{ 
                                    transform: `scaleY(${style.scaleY})`,
                                }}
                            />
                            )}
                        </Motion>)  }
                        </Section03__Image3>
                         
                        <Section03__Image4
                        onMouseEnter={this.handleMouseOver4}
                        onMouseOut={this.handleMouseOut}
                        >
                        { this.state.hovering4 ? 
                        (<Motion
                            defaultStyle={{ scaleY: 1 }}
                            style={{ scaleY: spring(0) }}
                        >
                            {(style) => (
                            <AnimationBox4 
                                scaleY={style.scaleY}
                                style={{ 
                                    transform: `scaleY(${style.scaleY})`,
                                }}
                            />
                            )}
                        </Motion>) 
                        :
                        (<Motion
                            defaultStyle={{ scaleY: 0 }}
                            style={{ scaleY: 1 }}
                        >
                            {(style) => (
                            <AnimationBox4 
                                scaleY={style.scaleY}
                                style={{ 
                                    transform: `scaleY(${style.scaleY})`,
                                }}
                            />
                            )}
                        </Motion>)  }
                        </Section03__Image4>
                        
                        {/* <Section03__Image1 src={this.state.SomeofOurWorkRugdoctor} 
                            onMouseOver={this.handleMouseOver2}
                            onMouseOut={this.handleMouseOut}
                        />
                    </Section03__Container__imageSm> 
                    <Section03__Container__imageSm> 
                        <Section03__Image1 src={this.state.SomeofOurWorkMethTesting} 
                            onMouseOver={this.handleMouseOver3}
                            onMouseOut={this.handleMouseOut}
                        />
                        <Section03__Image1 src={this.state.SomeofOurWorkToyota} 
                            onMouseOver={this.handleMouseOver4}
                            onMouseOut={this.handleMouseOut}
                        /> */}
                        {/* <StyledSquare
                        src={this.state.SomeofOurWorkToyota} 
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        />
        <StyledBox
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        /> */}
                    </Section03__Container__imageSm> 
                </Section03__Container__image>
            </Section03>
        )
    }
}

export default Section3;