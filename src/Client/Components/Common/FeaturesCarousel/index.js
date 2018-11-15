import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import FeaturesCard from '../FeaturesCard';
// import ArrowLeft from '../Arrows/arrowLeft';
// import ArrowRight from '../Arrows/arrowRight';
import ArrowRightIcon from '../../../../Assets/Images/arrowRight.svg';
import ArrowLeftIcon from '../../../../Assets/Images/arrowLeft.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../Assets/Styles/Themes';
import Slider from "react-slick";

//images
import MobileApps from '../../../../Assets/Images/MobileApps.svg'
import Websites from '../../../../Assets/Images/Websites.svg'
import Integrations from '../../../../Assets/Images/Integrations.svg'
import FullSolutions from '../../../../Assets/Images/FullSolutions.svg'

//icons
import IconBrain from '../../../../Assets/Images/IconBrain.svg'
import IconCommunication from '../../../../Assets/Images/IconCommunication.svg'
import IconData from '../../../../Assets/Images/IconData.svg'
import IconEcommerce from '../../../../Assets/Images/IconEcommerce.svg'
import IconHandShake from '../../../../Assets/Images/IconHandShake.svg'
import IconInformation from '../../../../Assets/Images/IconInformation.svg'
import IconPeople from '../../../../Assets/Images/IconPeople.svg'
import IconPoint from '../../../../Assets/Images/IconPoint.svg'
import IconSettings from '../../../../Assets/Images/IconSettings.svg'
import IconWeb from '../../../../Assets/Images/IconWeb.svg'

//components
import HideAndShowCard1 from '../../Common/HideAndShow/HideAndShowCard1';
import HideAndShowCard2 from '../../Common/HideAndShow/HideAndShowCard2';
import HideAndShowCard3 from '../../Common/HideAndShow/HideAndShowCard3';
import HideAndShowCard4 from '../../Common/HideAndShow/HideAndShowCard4';

function ArrowRight(props) {
  const { onClick, className } = props;
  return (
    <ArrowStyle
      src={ArrowRightIcon}
      onClick={onClick}
      className={className}
      right
    />
  );
}

function ArrowLeft(props) {
  const { onClick, className } = props;
  return (
    <ArrowStyle
      src={ArrowLeftIcon}
      onClick={onClick}
      className={className}
      left
    />
  );
}

const ArrowStyle = styled.img`
  width:10px;
  height:20px;
  margin:10px;
  left: ${props => props.left ? '-28px' : 'inherit'};  
  right: ${props => props.right ? '-28px' : 'inherit'};
  ${breakpoint('sm')`
  width:14px;
  height:28px;
  left: ${props => props.left ? '-10px' : 'inherit'};  
  right: ${props => props.right ? '-10px' : 'inherit'};
  `}
  ${breakpoint('md')`
  width:14px;
  height:28px;
  left: ${props => props.left ? '-50px' : 'inherit'};    
  right: ${props => props.right ? '-50px' : 'inherit'};
  `}
  ${breakpoint('lg')`
  width:14px;
  height:28px;
  left: ${props => props.left ? '-70px' : 'inherit'};  
  right: ${props => props.right ? '-70px' : 'inherit'};
	`}
`

class FeaturesCarousel extends Component {
  constructor() {
    console.log('Features Constructor')
    super();
    this.state = { 
      showing : false,
      showing2 : false,
      showing3 : false,
      showing4 : false,
      features: [
        {
          texts: ["Capturing data from the field",
                  "Communicating with your mobile workforce"],
          title: ["Harness the latest in web tech ", "to tell showcase your business"],


        }
      ]
    }
  }
  _onItemClick = () => {
    console.log ("Hi", this.state.showing);
    this.setState({showing: !this.state.showing});
  }
  _onItemClick2 = () => {
    console.log ("Hi", this.state.showing2);
    this.setState({showing2: !this.state.showing2});
  }
  _onItemClick3 = () => {
    console.log ("Hi", this.state.showing3);
    this.setState({showing3: !this.state.showing3});
  }
  _onItemClick4 = () => {
    console.log ("Hi", this.state.showing4);
    this.setState({showing4: !this.state.showing4});
  }
render () {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows:true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:false
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  };
      return (
        <div>
        <Slider {...settings}>
            <FeaturesCard 
            onPress={this._onItemClick}
            image = {MobileApps}
            iconName1 = {IconData}
            iconName2 = {IconCommunication}
            iconName3 = {IconHandShake}
            iconName4 = {IconInformation}
            text1 = "Capturing data from the field"
            text2 = "Communicating with your mobile workforce"
            text3 = "Improving customer engagement"
            text4 = "Providing your workforce valuable company or product information"
            />
            <FeaturesCard 
            onPress={this._onItemClick2}
            image = {Websites}
            iconName1 = {IconInformation}
            iconName2 = {IconEcommerce}
            iconName3 = {IconPeople}
            text1 = "Informative sites to promote your brand"
            text2 = "E-commerce sites"
            text3 = "Customer capture for marketing"
            />
            <FeaturesCard 
            onPress={this._onItemClick3}
            image = {Integrations}
            iconName1 = {IconPeople}
            iconName2 = {IconPoint}
            iconName3 = {IconData}
            iconName4 = {IconSettings}
            text1 = "Get your current software solutions communicating with each other"
            text2 = "Provide a unified interface for your existing software"
            text3 = "Reduce double-handling of data"
            text4 = "Automate your processes of data"
            />
            <FeaturesCard 
            onPress={this._onItemClick4}
            image = {FullSolutions}
            iconName1 = {IconWeb}
            iconName2 = {IconBrain}
            iconName3 = {IconHandShake}
            text1 = "Mobile apps with an office based web portal"
            text2 = "Everything designed specifically for your business processes"
            text3 = "Software designed to to help lead your business forward "
            />
      </Slider>
          {this.state.showing &&  <HideAndShowCard1 
            title={["Transform your business with",<Br2 />,"the power of mobile"]}
            text={["Whether you are looking to replace paper-based processes",<Br2 />,"communicate with your team",<Br />, "interact with your customers, or",<Br2 />,"revolutionise your business, we can help."]}
          />}
          {this.state.showing2 && 
            <HideAndShowCard2 
            title={["Harness the latest in web tech ", <Br2 />, "to showcase your business"]} 
            text={["The first port of call for a customer wanting to engage with", <Br2 />, "a business is online.",<Br />, "Make sure your web site captures the hearts and ", <Br2 />, "minds of those looking."]} 
          />}
          {this.state.showing3 && 
            <HideAndShowCard3
            title={"Embrace the power of collaboration"} 
            text={["Multiple systems for multiple purposes? No problem.", <Br2 />,<Br />,"Increase the efficiency of your existing systems by helping them communicate", <Br2 />," and share information."]} 
          />}    
          {this.state.showing4 && 
            <HideAndShowCard4 
            title={"Tailor made for you"} 
            text={["Sometimes the best solution is a bespoke solution.", <Br2 />,<Br />,"We can dive into the inner workings of you business to design and build software that fits you like a glove."]} 
          />}
          </div>
      );
    }
  }

  const Br = styled.br`
  display:none;
  ${breakpoint('md')`
  display:none;
  `}
  ${breakpoint('lg')`
  display:block;
  `}
  `
  const Br2 = styled.br`
  display:none;
  ${breakpoint('md')`
  display:block;
  `}
  ${breakpoint('lg')`
  display:none;
  `}
  `
export default FeaturesCarousel;