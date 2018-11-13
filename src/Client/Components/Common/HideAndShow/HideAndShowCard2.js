import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import Themes from '../../../../Assets/Styles/Themes';

//Components
import MintSpan from '../../Common/MintSpan';
import BigTitle from '../../Common/Title/BigTitle';
import HideAndShowCard from '../HideAndShowCard';

//Images
import IconGlobe from '../../../../Assets/Images/globe.svg'
import IconEcommerce from '../../../../Assets/Images/ecommerce.svg'
import IconHandShake from '../../../../Assets/Images/IconHandShake.svg'
import IconPeople from '../../../../Assets/Images/IconPeople.svg'

//PhotoImages
import HowWeCanHelpImg1 from '../../../../Assets/Images/HowwecanhelpImg1.png'

class HideAndShowCard2 extends Component {
    render(){
        return(
            <Container>
                <Section01>
                    <Section01__Title>{this.props.title}</Section01__Title>    
                    <MintSpan />
                    <Section01__Text>{this.props.text}</Section01__Text>
                </Section01>
                <Section02>
                    <HideAndShowCard 
                    iconName1 = {IconGlobe}
                    iconName2 = {IconEcommerce}
                    iconName3 = {IconHandShake}
                    iconName4 = {IconPeople}
                    title1 = "Highlight your brand story"
                    title2 = "Enhance your e-commerce platform"
                    title3 = "Inform, connect, and engage with your customer"
                    title4 = "We can help engage customers by:"
                    text1 = "Capturing data from the field"
                    text2 = "Communicating with your mobile workforce"
                    text3 = "Improving customer engagement"
                    text4 = "Providing your workforce valuable company or product information"
                    img = {HowWeCanHelpImg1}
                    />
                </Section02>
            </Container>
        )
    }
}

const Container = styled.div`
    // padding: 0 10%;
        padding: ${Themes.paddings.mobile};
    ${breakpoint('md')`
        padding: ${Themes.paddings.tablet};
    `}
    ${breakpoint('lg')`
        padding: 10% 0 0 0;
    `}
`
const Section01 = styled.div`
    margin:0 auto;
`    
const Section02 = styled.div`
    margin:0 auto;
`    
const Section01__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
    `}
`
const Section01__Text = styled.div`
    margin-top:9px;
    margin-bottom: -10%;
    ${Text};
    color:${Themes.colors.grey};
    text-align:center;
        ${breakpoint('md')`
            font-size:${Themes.fontsize.p1}
            line-height:26px;
            margin-bottom: -10px;   
        `}
        ${breakpoint('lg')`
            font-size:${Themes.fontsize.p1}
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
export default HideAndShowCard2;