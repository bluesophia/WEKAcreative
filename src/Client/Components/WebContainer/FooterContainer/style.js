import styled from 'styled-components';
import Themes from '../../../../Assets/Styles/Themes';
import breakpoint from 'styled-components-breakpoint';
import { Link } from 'react-router-dom';

/**** Footer style ****/
export const Box = styled.div`
      display: flex;
      justify-content: center;
      ${breakpoint('md')`
        float: right;
        margin-top: -12%;
      `};
      ${breakpoint('lg')`
      // justify-content: flex-end;
      `};
  `  
export const Sns = styled.a`
    color:${Themes.colors.grey};
    font-size: 1em;
    padding: 1.5em 1.5em;

      ${breakpoint('md')`
      padding: 0 1.1em;
      `};
      ${breakpoint('lg')`
      padding: 0 1.5em;
      `};
  `
export const Footer = styled.div`
  // height: 770px;
  // flex-direction: row;
  // align-items: space-between;
  font-family: Lato;
  background: ${Themes.colors.w_mint};
  // padding: 0 10%;
  line-height:1.5em;
  ${breakpoint('md')`
    // max-width: 768px;
    padding: 0 10%;
  `}
  ${breakpoint('lg')`
  `}
`
export const Container = styled.div`
  margin:0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${breakpoint('lg')`
      max-width: 1366px;
  `}
`
//footer top css
export const FooterTop = styled.div`
padding-top: 30px;
flex-direction: column;
  
  ${breakpoint('md')`
  display: flex;
  justify-content: space-between;
  padding-top: 0;
  `};
  ${breakpoint('lg')`
  padding-top:none;
  `};
`
export const FooterBox1 = styled.div`
// display: flex;
// flex-direction: column;

${breakpoint('md')`
// flex-direction: row;
`};
${breakpoint('lg')`
// flex-direction: row;
`};
`
export const FooterBox3 = FooterBox1.extend`
${breakpoint('md')`
order:3;
`};
`
export const FooterRightContainer = styled.div`
text-align:center;
${breakpoint('md')`
  text-align:left;
`};
${breakpoint('lg')`
  float: left;
  width: 100%;
`};
`
export const FooterTitle = styled.div`
font-size: ${Themes.fontsize.h4};
font-weight: ${Themes.fontWeight.bold};
text-align:center;
margin: 0.5em 0 0.5em 0;
color: ${Themes.colors.yellow};
  ${breakpoint('md')`
  display: none;
    `};
  ${breakpoint('lg')`
  display: none;
    `};
  `
export const FooterTitleDisplay = FooterTitle.extend`
display:none;
${breakpoint('md')`
display: block;
`};
`
export const LogoImg = styled.img`
	width:176px;
	// float:left;
  position:relative;
  ${breakpoint('md')`
    display: flex;
    margin-left: -21px;
	`}
	${breakpoint('lg')`
		width:160px;
	`}
`;
export const FooterText = styled.span`
  font-size: ${Themes.fontsize.h4};
  display:block;
  color: ${Themes.colors.grey};
  font-weight: ${Themes.fontWeight.light};
  line-height: 1.8;
  ${breakpoint('md')`
  font-size: 15px;
  font-weight: ${Themes.fontWeight.regular};
  `};
`
export const FooterTextAddress = FooterText.extend`
padding-top: 1.25em;
`
export const StyledLink__Div = styled.div`
  ${breakpoint('md')`
  display: none;
  `};
`
export const StyledLink__Div2 = styled.div`
  display: none;
  ${breakpoint('md')`
  display: flex;
  `};
`
export const StyledLink = styled(Link)`
  color: ${Themes.colors.grey};
  font-size: ${Themes.fontsize.h4};
  display:block;
  text-decoration: none;
  font-weight: ${Themes.fontWeight.light};
  line-height:1.8;
  ${breakpoint('md')`
  font-size: 15px;
  font-weight: ${Themes.fontWeight.regular};
  `};
`
//footer bottom css
export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5em;
  padding-bottom: 5%;
  text-align: center;
  ${breakpoint('md')`
  justify-content: space-between;
  text-align: left;
  `};
`
export const FooterBottomText = styled.span`
flex-direction: column;
font-size: ${Themes.fontsize.p4};
font-weight:${Themes.fontWeight.light};
text-align: center;
padding: 0;
color: ${Themes.colors.grey};
  ${breakpoint('md')`
    text-align: left;
    font-size: 15px;
    font-weight: ${Themes.fontWeight.regular};
      `}
`
//button
export const ButtonDiv = styled.div`
  transform: scale(0.9);
  padding: 10%;
  cursor: 'pointer';
    ${breakpoint('md')`
      padding: 5% 10% 5% 10%;
    `}
    ${breakpoint('lg')`
    `}
`
export const ButtonLink = styled(Link)`
        cursor:'pointer';

`

