import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import { Motion, spring } from 'react-motion';  
// import posed from 'react-pose';
// import { tween } from "popmotion";

/** components **/
import BigTitle from '../../../Common/Title/BigTitle';
import Text from '../../../Common/Text';
import YellowSpan from '../../../Common/YellowSpan';
import SomeofOurWorkToyota from '../../../../../Assets/Images/SomeofOurWorkToyota.svg';
import SomeofOurWorkToyota2 from '../../../../../Assets/Images/SomeofOurWorkToyota2.svg';
import SomeofOurWorkMethTesting3 from '../../../../../Assets/Images/SomeofOurWorkMethTesting3.svg';
import SomeofOurWorkMethTesting from '../../../../../Assets/Images/SomeofOurWorkMethTesting.svg';
import SomeofOurWorkRugdoctor from '../../../../../Assets/Images/SomeofOurWorkRugdoctor.svg';
import SomeofOurWorkRugdoctor2 from '../../../../../Assets/Images/SomeofOurWorkRugdoctor2.svg';
import SomeofOurWorkPassafe from '../../../../../Assets/Images/SomeofOurWorkPassafe.svg';
import SomeofOurWorkPassafe2 from '../../../../../Assets/Images/SomeofOurWorkPassafe2.svg';
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

        // <Motion
        // defaultStyle={{ scaleY: 0 }}
        // style={{ scaleY: spring(1) }}
        // >
        // {(style) => (
        // <AnimationBox 
        //     scaleY={style.scaleY}
        //     style={{ 
        //         transform: `scaleY(${style.scaleY})`,
        //     }}
        // />
        // )}
        // </Motion>

    )
        
    handleMouseOver2() {
        this.setState({
            SomeofOurWorkRugdoctor: Images[5]
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
                        onMouseEnter={this.handleMouseOver1}
                        onMouseOut={this.handleMouseOut}
                        >
                        { this.state.hovering ? 
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
                        onMouseEnter={this.handleMouseOver1}
                        onMouseOut={this.handleMouseOut}
                        >
                        { this.state.hovering ? 
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
                        onMouseEnter={this.handleMouseOver1}
                        onMouseOut={this.handleMouseOut}
                        >
                        { this.state.hovering ? 
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
    margin-bottom: 10%;
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
        // padding-top: 8%;
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
    // justify-content: center;
    // align-items: center;
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
    text-align:left;
        ${breakpoint('md')`
            font-size:${Themes.fontsize.p1}
            line-height:26px;
            margin-bottom: 10%;
            text-align:center;
        `}
`
const Section03__ImageDiv = styled.div`
`
// const Section03__Image1 = styled.img`

//     // margin: -2px 0;
//     &:hover {
//         background: url('${SomeofOurWorkToyota}');
//     }
//     ${breakpoint('md')`
//         width: 295px;
//     `}
//     ${breakpoint('lg')`
//     // transform: scale(1.5);
//     // margin: 0 0 10% 16%; 
//     width:585px;
//     `}
// `
const Section03__Image1 = styled.div`
    width: 600px;
    height: 314px;
    background: url('${SomeofOurWorkPassafe2}');
    background-size: cover;
    ${breakpoint('md')`
        // width: 295px;
        width: 455px;
        height: 197px;
        margin-left: -1px;
    `}
    ${breakpoint('lg')`
    // transform: scale(1.5);
    // margin: 0 0 10% 16%; 
    // width:585px;
    height: 314px;
    `}
`
const Section03__Image2 = styled.div`
    width: 600px;
    // height: 400px;
    height: 314px;
    background: url('${SomeofOurWorkRugdoctor2}');
    background-size: cover;
    ${breakpoint('md')`
        // width: 295px;
        width: 455px;
        height: 197px;
        margin-left: -1px;
    `}
    ${breakpoint('lg')`
    // transform: scale(1.5);
    // margin: 0 0 10% 16%; 
    // width:585px;
    height: 314px;
    `}
`
const Section03__Image3 = styled.div`
    width: 600px;
    // height: 400px;
    height: 314px;
    background: url('${SomeofOurWorkMethTesting3}');
    background-size: cover;
    ${breakpoint('md')`
        // width: 295px;
        width: 455px;
        height: 197px;
        margin-left: -1px;
    `}
    ${breakpoint('lg')`
    // transform: scale(1.5);
    // margin: 0 0 10% 16%; 
    // width:585px;
    height: 314px;
    `}
`
const Section03__Image4 = styled.div`
    width: 600px;
    // height: 400px;
    height: 314px;
    background: url('${SomeofOurWorkToyota2}');
    background-size: cover;
    ${breakpoint('md')`
        width: 455px;
        height: 197px;
        margin-left: -1px;
    `}
    ${breakpoint('lg')`
    // transform: scale(1.5);
    // margin: 0 0 10% 16%; 
    // width:585px;
    height: 314px;
    `}
`


// const Square = posed.img({
//     idle: {
//       scale: 1,
//       opacity: 0.5,
//       transition: props => tween({ ...props, duration: 2000 }),
//     },
//     hovered: {
//       scale: 1,
//       opacity: 1,
//       transition: props => tween({ ...props, duration: 1000 })
//     }
//   });

  
//   const StyledSquare = styled(Square)`
//   width: 100px;
//   height: 100px;
//   background: blue;
// `
  


// const Box = posed.div({
//     hoverable: true,
//     pressable: true,
//     init: {
//       scale: 1,
//       opacity: 1,
//       boxShadow: '0px 0px 0px rgba(0,0,0,0)',
//       backgroundImage: `url(${SomeofOurWorkRugdoctor})`
//     },
//     hover: {
//       scale: 1.2,
//       opacity: 1,
//       boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
//       backgroundImage: `url(${SomeofOurWorkRugdoctor})`
//     },
//     press: {
//       scale: 1.1,
//       boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
//       backgroundImage: `url(${SomeofOurWorkRugdoctor})`
//     }
// //   });
//   const StyledBox = styled(Box)`
//   width: 100px;
//   height: 100px;
//   background: url('${SomeofOurWorkToyota}');
//   `

const AnimationBox1 = styled.div`
    height:100%;
    width: 100%;
    // background: #000;
    background: url('${SomeofOurWorkPassafe}');
    background-size: cover;
    // transform: scaleX(${(props) => props.scaleX});
    transform-origin: top;
`
const AnimationBox2 = styled.div`
    height:100%;
    width: 100%;
    // background: #000;
    background: url('${SomeofOurWorkRugdoctor}');
    background-size: cover;
    // transform: scaleX(${(props) => props.scaleX});
    transform-origin: top;
`
const AnimationBox3 = styled.div`
    height:100%;
    width: 100%;
    // background: #000;
    background: url('${SomeofOurWorkMethTesting}');
    background-size: cover;
    // transform: scaleX(${(props) => props.scaleX});
    transform-origin: top;
`
const AnimationBox4 = styled.div`
    height:100%;
    width: 100%;
    // background: #000;
    background: url('${SomeofOurWorkToyota}');
    background-size: cover;
    // transform: scaleX(${(props) => props.scaleX});
    transform-origin: top;
`
export default Section3;