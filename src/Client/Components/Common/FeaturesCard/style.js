import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';

export const Br = styled.br`
display:none;
${breakpoint('md')`
display:none;
`}
${breakpoint('lg')`
display:block;
`}
`
export const Br2 = styled.br`
display:none;
${breakpoint('md')`
display:block;
`}
${breakpoint('lg')`
display:none;
`}
`
export const Section05__div = styled.div`
    // height: auto;
    display: flex;
    align-items: space-around;
    flex-direction: column;
`
export const Section05__ImgDiv = styled.div`
    display: flex;
    align-items: center;
`
export const Section05__TextDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
`
export const Section05__Icon = styled.img`
    width: 27px;
    // height: 64px;
    margi-right: 10px;
    margin-right: 10px;
`
export const Section05__Card = styled.div`
    // border : 1px solid #ccc;
    width:264px;
    height:500px;
    margin: 30px auto;
    background-color:white;
    padding: 40px 15px 30px 15px;
    box-sizing: border-box;
    margin-top: 20%;
    ${breakpoint('md')`
        width:  px;
        // height:412px;
        height:420px;
    padding: 40px 15px 30px 15px;
    box-sizing: border-box;
    margin-top: 0;
    `}
    ${breakpoint('lg')`
        width: 190px;
        height: auto;
        // height:412px;
    // padding: 40px 10px 30px 10px;
    padding: 0;
    box-sizing: border-box;
    `}
`
export const Section05__CardCircle = styled.div`
    // width:87px;
    // height:87px;
    // border-radius:50%;
    // margin:auto; 
    // display:flex;
    // justify-content:center;
    // align-items:center;
`
export const Section05__CardTitle = styled.p`
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.p1};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    margin:20px 0 10px 0;
    line-height:23px;
    padding:0;
`
export const Section05__TitleImage = styled.img`
        // width: 100%;
        // height: auto;
`
export const Section05__CardText = styled.p`
    color:${Themes.colors.grey};
    font-size:12px;
    // text-align:center;
    line-height:16px;
    padding:10px;        
`
export const Section05__YellowText = styled.p`
    display: none;
    color: ${Themes.colors.orange};
    display: block;
    cursor: pointer;
    font-size: 16px;    
    text-align: center;
    margin-top: -20px;
    ${breakpoint('md')`
    color: ${Themes.colors.orange};
    cursor: pointer;
    font-size: 16px;    
    text-align: center;
    margin-top: -10px;
    `}
    ${breakpoint('lg')`
    color: ${Themes.colors.orange};
    cursor: pointer;
    font-size: 16px;    
    text-align: center;
    margin-top: -20px;
    `}
`