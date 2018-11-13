import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../Assets/Styles/Themes';



class FeaturesCard extends Component {
            render () {
                // function hideAndshow() {
                //     const element = document.getElementById("yellowText");
                //     const p = document.querySelector("#p");  
                //     element.click(function(){
                //         alert ("hide");
                //         p.hide();
                //     });
                // }
                return(
                <Section05__Card className="cardDisplay">
                    <Section05__CardCircle>
                        <Section05__TitleImage src={this.props.image} alt=''/>
                    </Section05__CardCircle>
                    <Section05__div>
                        <Section05__ImgDiv>
                        <Section05__Icon src={this.props.iconName1}/>
                        <Section05__CardText>{this.props.text1}</Section05__CardText>
                        </Section05__ImgDiv>
                        <Section05__ImgDiv>
                        <Section05__Icon src={this.props.iconName2}/>
                        <Section05__CardText>{this.props.text2}</Section05__CardText>
                        </Section05__ImgDiv>
                        <Section05__ImgDiv>
                        <Section05__Icon src={this.props.iconName3}/>
                        <Section05__CardText>{this.props.text3}</Section05__CardText>
                        </Section05__ImgDiv>
                        <Section05__ImgDiv>
                        <Section05__Icon src={this.props.iconName4}/>
                        <Section05__CardText>{this.props.text4}</Section05__CardText>
                        </Section05__ImgDiv>
                        <Section05__YellowText id="yellowText">Read More</Section05__YellowText>
                       
                    </Section05__div>
                </Section05__Card>
            )}
        };

// const Shadow = css`
//     box-shadow : -2px 2px 4px rgba(50,50,93,0.23);
// `
const Section05__div = styled.div`
    // padding: 5% 6%;
`
const Section05__ImgDiv = styled.div`
    display: flex;
    align-items: center;
`
const Section05__Icon = styled.img`
    width: 27px;
    // height: 64px;
    margi-right: 10px;
    margin-right: 10px;
`
const Section05__Card = styled.div`
    width:264px;
    height:400px;
    margin: 30px auto;
    background-color:white;
    padding: 40px 15px 30px 15px;
    box-sizing: border-box;
    ${breakpoint('md')`
        width:284px;
        height:412px;
    padding: 40px 15px 30px 15px;
    box-sizing: border-box;
    `}
    ${breakpoint('lg')`
        width: 180px;
        height:412px;
    // padding: 40px 10px 30px 10px;
    padding: 40px 0 30px 0;
    box-sizing: border-box;
    `}
`
const Section05__CardCircle = styled.div`
    // width:87px;
    // height:87px;
    // border-radius:50%;
    // margin:auto; 
    // display:flex;
    // justify-content:center;
    // align-items:center;
`
const Section05__CardTitle = styled.p`
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.p1};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    margin:20px 0 10px 0;
    line-height:23px;
    padding:0;
`
const Section05__TitleImage = styled.img`
        // width: 100%;
        // height: auto;
`
const Section05__CardText = styled.p`
    color:${Themes.colors.grey};
    font-size:12px;
    // text-align:center;
    line-height:16px;
    padding:10px;        
`
const Section05__YellowText = styled.p`
    color: ${Themes.colors.orange};
    font-size: 16px;    
    text-align: center;
    margin-top: -20px;
`

export default FeaturesCard;