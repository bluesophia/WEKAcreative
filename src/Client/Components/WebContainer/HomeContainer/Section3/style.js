import styled  from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
// import posed from 'react-pose';
// import { tween } from "popmotion";

/** components **/
import BigTitle from '../../../Common/Title/BigTitle';
import Text from '../../../Common/Text';
import SomeofOurWorkToyota from '../../../../../Assets/Images/SomeofOurWorkToyota.png';
import SomeofOurWorkToyota2 from '../../../../../Assets/Images/SomeofOurWorkToyota2.svg';
import SomeofOurWorkMethTesting3 from '../../../../../Assets/Images/SomeofOurWorkMethTesting3.svg';
import SomeofOurWorkMethTesting from '../../../../../Assets/Images/SomeofOurWorkMethTesting.png';
import SomeofOurWorkRugdoctor from '../../../../../Assets/Images/SomeofOurWorkRugdoctor.png';
import SomeofOurWorkRugdoctor2 from '../../../../../Assets/Images/SomeofOurWorkRugdoctor2.svg';
import SomeofOurWorkPassafe from '../../../../../Assets/Images/SomeofOurWorkPassafe.png';
import SomeofOurWorkPassafe2 from '../../../../../Assets/Images/SomeofOurWorkPassafe2.svg';
// import AnimationBox from '../../../../Function/AnimationBox';

export const Br = styled.br`
    display:none;
    ${breakpoint('md')`
    display:block;
    `}
    ${breakpoint('lg')`
    display:block;
    `}
`
export const Section03 = styled.div`
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
export const Section03__Container = styled.div`
`
export const Section03__Container__image = styled.div`
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
    display: flex;
    flex-direction: column;
    align-items: center;
        padding-top: 0;
        margin-bottom: 0;
        // transform: scale(1.8);
    `}
`
export const Section03__Container__imageSm = styled.div`
    ${breakpoint('md')`
    display:flex;
    // justify-content: center;
    // align-items: center;
    `}
    
`
export const Section03__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
    `}
`
export const   Section03__Text = styled.div`
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
export const Section03__ImageDiv = styled.div`
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
export const Section03__Image1 = styled.div`
    width: 100%;
    height: 199px;
    // height: 250px;
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
    height: 303px;
    margin-left: 0;
    `}
`
export const Section03__Image2 = styled.div`
width: 100%;
// height: 250px;
height: 199px;
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
    height: 303px;
    `}
`
export const Section03__Image3 = styled.div`
width: 100%;
// height: 250px;
height: 199px;
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
    height: 303px;
    margin-left: 0;
    `}
`
export const Section03__Image4 = styled.div`
width: 100%;
// height: 250px;
height: 199px;
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
    height: 303px;
    // height: 314px;
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

export const AnimationBox1 = styled.div`
    height:100%;
    width: 100%;
    // background: #000;
    background: url('${SomeofOurWorkPassafe}');
    background-size: cover;
    // transform: scaleX(${(props) => props.scaleX});
    transform-origin: top;
`
export const AnimationBox2 = styled.div`
    height:100%;
    width: 100%;
    // background: #000;
    background: url('${SomeofOurWorkRugdoctor}');
    background-size: cover;
    // transform: scaleX(${(props) => props.scaleX});
    transform-origin: top;
`
export const AnimationBox3 = styled.div`
    height:100%;
    width: 100%;
    // background: #000;
    background: url('${SomeofOurWorkMethTesting}');
    background-size: cover;
    // transform: scaleX(${(props) => props.scaleX});
    transform-origin: top;
`
export const AnimationBox4 = styled.div`
    height:100%;
    width: 100%;
    // background: #000;
    background: url('${SomeofOurWorkToyota}');
    background-size: cover;
    // transform: scaleX(${(props) => props.scaleX});
    transform-origin: top;
`