import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import Themes from '../../../../Assets/Styles/Themes';

//Components
import MintSpan from '../../Common/MintSpan';
import BigTitle from '../../Common/Title/BigTitle';
import HideAndShowCardRow from '../HideAndShowCard/HideAndShowCardRow';

//Images
import IconGlobe from '../../../../Assets/Images/globe.svg'
import IconEcommerce from '../../../../Assets/Images/ecommerce.svg'
import IconHandShake from '../../../../Assets/Images/IconHandShake.svg'
import IconPeople from '../../../../Assets/Images/IconPeople.svg'

//PhotoImages
import HowWeCanHelpImg4 from '../../../../Assets/Images/howwecanhelpImg4.png'
import HowWeCanHelpImg5 from '../../../../Assets/Images/howwecanhelpImg5.png'
import HowWeCanHelpImg6 from '../../../../Assets/Images/howwecanhelpImg6.png'
import HowWeCanHelpImg7 from '../../../../Assets/Images/howwecanhelpImg7.png'

class HideAndShowCard1 extends Component {
    render(){
        return(
            <Container>
                <Section01>
                    <Section01__Title>{this.props.title}</Section01__Title>    
                    <MintSpan />
                    <Section01__Text>{this.props.text}</Section01__Text>
                </Section01>
                <Section02>
                    <HideAndShowCardRow
                    iconName1 = {IconGlobe}
                    iconName2 = {IconEcommerce}
                    title1 = "Capturing data from the field"
                    title2 = "Communicate with your team"
                    text1 = {"Capturing data via mobile helps improve compliance, reduce errors, lower costs, and improve efficiency. With a focus on the human attached to the mobile device we combine science and design to create intuitive data capture processes."}
                    text2 = {["Communicating with your team in a timely manner can be the difference between a missed opportunity and the deal of a lifetime. Our mobile apps can help your team stay connected to your business and to each other", <Br />, " We can help engage customers through:"]}
                    img1 = {HowWeCanHelpImg4}
                    img2 = {HowWeCanHelpImg5}
                    />
                    <HideAndShowCardRow
                    iconName1 = {IconHandShake}
                    iconName2 = {IconPeople}
                    title1 = "Increase customer engagement"
                    title2 = "Improve access to key information"
                    text1 = {["Foster a sense of belonging with your customer through processes that engage them with your brand.", <Br />, " We can help engage customers through:"]}
                    text2 = {["Increase the effectiveness of your processes and the efficiency of your team by keeping them informed with the latest information.", <Br />, " We can help engage customers through:"]}
                    img1 = {HowWeCanHelpImg6}
                    img2 = {HowWeCanHelpImg7}
                    />
                </Section02>
            </Container>
        )
    }
}

const Br = styled.br`
`
const Container = styled.div`
    display: none;
    ${breakpoint('md')`
        display: block; 
        padding: 10% 0 0 0;
    `}
    ${breakpoint('lg')`
        // background: ${Themes.colors.w_mint};
        width:700px;
        margin-top: 30%;
    `}
`
const Section01 = styled.div`
    margin:0 auto;
`    
const Section02 = styled.div`
    margin:0 auto;
    ${breakpoint('md')`
        margin-bottom: 10%; 
    `}
    ${breakpoint('lg')`
        margin-top: 13%;
        // margin-bottom: 10%; 
    `}
`    
const Section01__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('md')`
    font-size:${Themes.fontsize.h3};  
    line-height:1.2;  
    `}
`
const Section01__Text = styled.div`
    margin-top:9px;
    margin-bottom: -10%;
    ${Text};
    color:${Themes.colors.grey};
    text-align:center;
        ${breakpoint('md')`
            font-size:${Themes.fontsize.p2}
            line-height:26px;
            margin-bottom: 2%;   
        `}
        ${breakpoint('lg')`
            font-size:${Themes.fontsize.p2}
            line-height:26px;
            margin-bottom: 5%;
        `}
`
const Section03 = styled.div`
    margin:0 auto;
`    
const Section03__ImgDiv = styled.div`
`
const Section03__Img = styled.img`
`
export default HideAndShowCard1;