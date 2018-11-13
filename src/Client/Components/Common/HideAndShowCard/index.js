import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import Themes from '../../../../Assets/Styles/Themes';

class HideAndShowCard extends Component {
    render(){
        return(
            <HideAndShowCard__Card>
                <HideAndShowCard__div>
                    <HideAndShowCard__ImgDiv>
                        <HideAndShowCard__Icon src={this.props.iconName1}/>
                        <HideAndShowCard__TextDiv>
                        <HideAndShowCard__CardTitle>{this.props.title1}</HideAndShowCard__CardTitle>
                        <HideAndShowCard__CardText>{this.props.text1}</HideAndShowCard__CardText>
                        </HideAndShowCard__TextDiv>
                    </HideAndShowCard__ImgDiv>
                    <HideAndShowCard__ImgDiv>
                        <HideAndShowCard__Icon src={this.props.iconName2}/>
                        <HideAndShowCard__TextDiv>
                        <HideAndShowCard__CardTitle>{this.props.title2}</HideAndShowCard__CardTitle>
                        <HideAndShowCard__CardText>{this.props.text2}</HideAndShowCard__CardText>
                        </HideAndShowCard__TextDiv>
                    </HideAndShowCard__ImgDiv>
                    <HideAndShowCard__ImgDiv>
                        <HideAndShowCard__Icon src={this.props.iconName3}/>
                        <HideAndShowCard__TextDiv>
                        <HideAndShowCard__CardTitle>{this.props.title3}</HideAndShowCard__CardTitle>
                        <HideAndShowCard__CardText>{this.props.text3}</HideAndShowCard__CardText>
                        </HideAndShowCard__TextDiv>
                    </HideAndShowCard__ImgDiv>
                    <HideAndShowCard__ImgDiv>
                        <HideAndShowCard__Icon src={this.props.iconName4}/>
                        <HideAndShowCard__TextDiv>
                        <HideAndShowCard__CardTitle>{this.props.title4}</HideAndShowCard__CardTitle>
                        <HideAndShowCard__CardText>{this.props.text4}</HideAndShowCard__CardText>
                        </HideAndShowCard__TextDiv>
                    </HideAndShowCard__ImgDiv>
                </HideAndShowCard__div>
                <HideAndShowCard__div>
                    <HideAndShowCard2__ImgDiv>
                        <HideAndShowCard__Img src={this.props.img} />
                    </HideAndShowCard2__ImgDiv>
                </HideAndShowCard__div>
            </HideAndShowCard__Card>
        )
    }
}
//card
const HideAndShowCard__div = styled.div`
    // padding: 5% 6%;
    ${breakpoint('lg')`
        padding-right: 5%
    `}
`
const HideAndShowCard__ImgDiv = styled.div`
    display: flex;
    align-items: center;
    ${breakpoint('lg')`
        padding: 4% 0;
        // width: 60%;
    `}
`
const HideAndShowCard2__ImgDiv = styled.div`
    ${breakpoint('lg')`
        // padding: 4% 0;
        // width: 60%;
    `}
`
const HideAndShowCard__Img = styled.img`
    ${breakpoint('lg')`
        width: 377px;
    `}
`
const HideAndShowCard__TextDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const HideAndShowCard__Icon = styled.img`
    width: 27px;
    // height: 64px;
    margi-right: 10px;
    margin-right: 10px;
    ${breakpoint('lg')`
        margin-right: 20px;
    `}

`
const HideAndShowCard__Card = styled.div`
    // width:264px;
    // height:400px;
    // margin: 30px auto;
    // background-color:white;
    // padding: 40px 15px 30px 15px;
    // box-sizing: border-box;
    display: none;
    ${breakpoint('md')`
    display: flex;
        width:284px;
        height:412px;
    padding: 40px 15px 30px 15px;
    box-sizing: border-box;
    `}
    ${breakpoint('lg')`
        width: 880px;
        height:545px;
        box-sizing: border-box;
    `}
`
const HideAndShowCard__CardTitle = styled.div`
    color:${Themes.colors.black};
    font-weight:${Themes.colors.black};
    font-size:${Themes.fontsize.p2};
`

const HideAndShowCard__CardText = styled.div`
    color:${Themes.colors.grey};
    font-size:12px;
    // text-align:center;
    line-height:16px;
    padding:10px;        
`

export default HideAndShowCard;