import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../../Assets/Styles/Themes';
import Button01 from '../../../Common/Button/Button01';
import { Link } from 'react-router-dom';

/** Images **/
import HomeSection01BgMd from '../../../../../Assets/Images/HomeSection01BgMd.png';
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
                            <StyledTitle>Accelerate your business processes through innovative 
                            software design</StyledTitle>
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
/**** Section 01 ****/

const Section01 = styled.div`
    margin:0;
    background-position:center top;
    background-repeat:no-repeat;
    background-size:100% 100%;
    ${breakpoint('md')`
        background: url('${HomeSection01BgMd}');
        background-position:center top;
        background-repeat:no-repeat;
        background-size:120% 120%;
    `}
`
const Container = styled.div`
    padding: 14% 10%;
    display:flex;
    flex-direction:column;
    align-items:center;
        ${breakpoint('md')`
            padding: 10% 14% 0 14%;
            // padding: 70px 8%;
            // justify-content:space-between;
            // align-items:center;
        `}
        ${breakpoint('lg')`
            max-width: 1366px;
            margin:0 auto;
            padding: 70px 8% 30px 8%;
        `}
`
const Section01__Image = styled.div`
    width:100%;
        ${breakpoint('md')`
            transform: scale(0.9);
        `}
`
const MainImage = styled.img`
    width:inherit;
    height:auto;
`
const Section01__TitleDiv = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
    ${breakpoint('md')`
        width:85%;
        align-items:flex-start;
    `}
    ${breakpoint('lg')`
        margin-left:2em;
        height:250px;
    `}
`;
const StyledTitle = styled.div`
        ${BigTitle};
        color:${Themes.colors.black};
        font-weight:${Themes.fontWeight.black};
        margin: 1em 0;
        text-align:center;
        ${breakpoint('md')`
            text-align:center;
            margin:0;
        `}
        ${breakpoint('lg')`
            margin: 0 25% 0 0;
        `}
    `
const Section01__Text = styled.div`
    display:none;
    font-weight:${Themes.fontWeight.light};
    color:${Themes.colors.veryLightGrey};
    text-align:left;
    margin-top:20px;
    margin-bottom:20px;
    line-height:26px;
    font-size:${Themes.fontsize.p1};
        ${breakpoint('md')`
            display:flex;
            color:${Themes.colors.grey};
            font-weight:${Themes.fontWeight.regular};
            text-align: center;
        `}
        ${breakpoint('lg')`
           margin: 20px 15% 20px 0;
        `}
`
const ButtonDiv = styled.div`
    width:64%;
    ${breakpoint('md')`
        // margin-left:-5px;
        margin: 0 auto;
    `}
    ${breakpoint('lg')`
        width:70%;
        // margin-left:0;
    `}
`
const ButtonLink = styled(Link)`
        cursor:'pointer';
`

const SubTitle = styled.p`
        font-size:${Themes.fontsize.h3};
        color:${Themes.colors.white};
        text-align:center;
        font-weight:${Themes.fontWeight.regular};
        margin-top:60px;
            ${breakpoint('lg')`
            text-align:right;
        `}
    `

export default Section1;