import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import { Link } from 'react-router-dom';
import Logo from '../../../../Assets/Images/logo.svg';
import LogoColor from '../../../../Assets/Images/logo_color.png';
import Bg from '../../../../Assets/Images/header.png';
import loginIcon from '../../../../Assets/Images/login.svg';
import Menu from '../../../../Assets/Images/login.svg';
import PropTypes from "prop-types";




class HeaderContainer extends Component {
	render(){
		return (
			<ThemeProvider theme={Themes}>
				<Nav id="navbar">
				<Container>
				<LinkedLogo to='/'><LogoImg src={Logo}/></LinkedLogo>
				<NavWide>
					<WideDiv>
						<StyledLink to='/'  className="navHome">Home</StyledLink>
						<StyledLink to='/about'>About</StyledLink>
						<StyledLink to='/support'>Support</StyledLink>
						{/* <StyledLink to='/casestudy'>Casestudy</StyledLink> */}
						<StyledLink to='/contact'>Contact Us</StyledLink>
						<Box>
                           <Sns href="#">
                               <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                           </Sns>
                           <Sns href="#">
                               <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                           </Sns>
                           <Sns href="#">
                               <FontAwesomeIcon icon={['fab', 'instagram']} size="md" />
                           </Sns>
                       </Box>
					   <StyledLink onClick={this.burgerToggle} to='/login'>
						   <Login>
						   		<LoginIcon src={loginIcon} /> 
							</Login>
							Login
						</StyledLink>
					</WideDiv>
				</NavWide>
				<NavNarrow>
				<FontAwesomeIcon style={icon} icon='bars' onClick={this.burgerToggle} size="2x"/>
					<NarrowLinks className="narrowLinks">
						<NarrowStyledLink onClick={function(event){ this.burgerToggle; this.navColorChange}} to='/' className="navHome">Home</NarrowStyledLink>
						<NarrowStyledLink onClick={this.burgerToggle} to='/about'>About</NarrowStyledLink>
						<NarrowStyledLink onClick={this.burgerToggle} to='/support' >Support</NarrowStyledLink>
						<NarrowStyledLink onClick={this.burgerToggle} to='/casestudy'>Casestudy</NarrowStyledLink>
						<NarrowStyledLink onClick={this.burgerToggle} to='/contact'>Contact Us</NarrowStyledLink>
						<Box>
                           <Sns href="https://www.facebook.com/EasyFormsNZ/?ref=aymt_homepage_panel">
                               <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                           </Sns>
                           <Sns href="https://twitter.com/EasyFormsNZ">
                               <FontAwesomeIcon icon={['fab', 'twitter']} />
                           </Sns>
                           <Sns href="https://www.linkedin.com/company/easy-forms/">
                               <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                           </Sns>
                       </Box>
					   <NarrowStyledLink onClick={this.burgerToggle} to='/login'>
						   <Login>
						   		<LoginIcon src={loginIcon} /> 
							</Login>
							Login
						</NarrowStyledLink>
					</NarrowLinks>
				</NavNarrow>
				</Container>
				</Nav>
			</ThemeProvider>
            );
	}
	burgerToggle = () => {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'flex') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'flex';
			linksEl.style.justifyContent = 'center';
			linksEl.style.flexDirection = 'column';
		}
	}
	navColorChange = () => {
		let navHome = document.querySelector('.navHome');
		if(navHome) {
			document.querySelector('.navbar').style.backgroundColor="red";
		}
	}
}

const Nav = styled.div`
	height:auto;
	background-color: ${Themes.colors.w_mint};
	overflow: hidden;
	padding: 1.25em 10% 0.625em;
	position: sticky;
	a {
		color: #707070;
	};
	a:hover {
		color: #FF9800;
	}
		${breakpoint('md')`
			// padding: 3.25em 10% 0.625em;
			padding: 3%;
		`}
	`
const Container = styled.div`
	margin:0 auto;
	display:flex;
	justify-content:space-between;
	${breakpoint('md')`	
		display:flex;
		justify-content:space-between;
		align-items:center;
		flex-direction:row;
	`}
    ${breakpoint('lg')`
		max-width: 1366px;
    `}
`
const NavNarrow = styled.div`
		display: block;
		width:100%;
		@media (min-width: 768px) {
  		display: none;
		}
`;

 const NavWide = styled.div`
	display: none;
		@media (min-width: 768px) {
			display:none;
			display: flex;
			justify-content:flex-end;
		}
 `;

const WideDiv = styled.div`
display:flex;
align-items: flex-end;

`;
const Box = styled.div`
    display: flex;
	justify-content:center;
	border-bottom: 0.1px solid ${Themes.colors.veryLightGrey};
	${breakpoint('md')`
	align-items: baseline;
	padding:0;
	border-bottom: 0;
		`}
		${breakpoint('lg')`
		align-items: flex-end;
		padding: 1em 0 1em 1em;
	`}
`
const Sns = styled.a`
	color: ${Themes.colors.white};
	font-size: 1em;
	padding: 1em;
	${breakpoint('md')`
		padding: 1em 0.5em;
		// &:last-child {
		// 	padding: 1em 0 1em 0.5em;
		// }
		`}
	${breakpoint('lg')`
	padding: 0 1em;
	// &:last-child {
	// 	padding: 1em 0 0 1em;
	//   }
	`}
`
const Login = styled.a`
	color: ${Themes.colors.white};
	padding: 0 0.5em 0 0;
	${breakpoint('md')`
			padding: 0 0.2em 0 0;
		`}
	${breakpoint('lg')`
		padding: 1em 0.5em 0 1em;
	`}
`
const LoginIcon = styled.img`
	width:21px;
	height:21px;
	vertical-align:middle;
	${breakpoint('md')`
		vertical-align:sub;
	`}	
	${NarrowLinks}:hover & {
		fill: ${Themes.colors.yellow};
	}
`

const LogoImg = styled.img`
	width:30px;
	float:left;
	position:absolute;
	${breakpoint('md')`
		content: url(${LogoColor});
		width:120px;
	`}
	${breakpoint('lg')`
		content: url(${LogoColor});
		width:100px;
	`}
`
const LinkedLogo = styled(Link)`
	height:32px;
	${breakpoint('md')`
		margin-top: -20px;
		height:50px;
	`}
	${breakpoint('lg')`
		margin-top: -40px;
	`}
`
const icon = {
	float:'right',
	clear: 'right',
	cursor: 'pointer',
	color: '#707070',
	height: 'auto'
};

const StyledLink = styled(Link)`
text-decoration: none;
color: ${Themes.colors.lightGrey};
font-size: 1em;
padding: 1em;
font-weight: ${Themes.fontWeight.light};
cursor:'pointer';
	${breakpoint('md')`
		padding: 1em 0.5em;
		&:last-child {
			padding: 1em 0.5em 0.9em 0.5em;
			}
	`}
`;

const NarrowLinks = styled.div`
		position: static;
		display: none;
		margin: 3.5em 0 0;
		${breakpoint('md')`
		display: none;
	`}
		
`;

const NarrowStyledLink = styled(Link)`
text-decoration: none;
color: ${Themes.colors.lightGrey};
font-size: 1em;
font-weight: ${Themes.fontWeight.regular};
padding: 1em;
display:block;
text-align: center;
border-bottom: 0.1px solid ${Themes.colors.verylightGrey};
	&:last-child {
	border-bottom: 0px;
		}
`;

  export default HeaderContainer;