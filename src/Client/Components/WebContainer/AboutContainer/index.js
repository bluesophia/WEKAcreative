import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from '../../../../Assets/Styles/Themes';
import { Section01,
  Br,
  Section01__Container,
  Section01__TitleDiv,
  Section01__Title,
  Section01__Text,
  Section01__Image,
  MainImage,
  Section01__Image2,
  Section02,
  Container,
  Section__Title,
  Section__Text,
  Section03,
  MainImage2
} from './style';
/** Images **/
import mainImage from '../../../../Assets/Images/AboutSection01Image.svg';
import mainImage2 from '../../../../Assets/Images/AboutSection01Image2.svg';
/** Animation**/ 
import ScrollAnimation from 'react-animate-on-scroll';

class AboutContainer extends Component {
  render(){
    return(
      <ThemeProvider theme={Themes}>   
      <div>
      <ScrollAnimation animateIn='fadeIn'>
            <Section01>
            {/* <Section01__ImageTop><MainImageBackground src={mainImage2_1}/></Section01__ImageTop> */}
            <ScrollAnimation animateIn='fadeIn'>   
              <Section01__Container>     
                <Section01__TitleDiv>
                    <Section01__Title>About Us</Section01__Title>
                    <Section01__Text>
                      At Weka Creative we believe good design puts people in the centre of processes. empowering them to do
                      better and achieve more. Through applying design competency, our software solutions aim to support enterprises by:<br/><br/>
                      - Demystifying process complexity<br/>
                      - Creating the right tools, and<br/>
                      - Delivering value for their stakeholders
                    </Section01__Text>
                </Section01__TitleDiv>
                <Section01__Image><MainImage src={mainImage}/></Section01__Image>
                <Section01__Image2><MainImage2 src={mainImage2}/></Section01__Image2> 
              </Section01__Container>
              </ScrollAnimation>
            </Section01>
            <ScrollAnimation animateIn='fadeIn'>
            <Section02>
              <Container>
                    <Section__Title>The <Br />Mission</Section__Title>
                    <Section__Text>
                        Who we are (3 ‘We’)<br />
                        We are the professional digital consultant and agency.<br />
                        We are the decision makers to develop better business industry.<br />
                        We are the explorer to find new ideas and technology for support society. 
                    </Section__Text>
                </Container>
            </Section02>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn'>
            <Section02>
              <Container>
                  <Section__Title>The <Br />Vision</Section__Title>
                  <Section__Text><b>Future Trend Setter</b><br />
                  <b><i>WEKA CREATIVE sails to undiscovered the ocean of technology.</i></b><br />
                  We will become the pioneer of future technology and provide things to people have no experience yet. We will discover the potentials and opportunities around us so that WEKA CREATIVE become a leader in technology industries.<br /><br />
                  ​<b>A standard digital consultant</b><br />
                  <b><i>WEKA CREATIVE will provide the guide how people are survived in unexpected future technology.</i></b><br />
                  ​​As we are digital agency in the society, WEKA CREATIVE will deliver an advise and right way guide to expand the range of strategy and foresight. We are focusing deep understanding and being sensitive on human behaviour to find out the hustling in life.</Section__Text>
              </Container>
            </Section02>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn'>
            <Section03>
              <Container>
                  <Section__Title>Core <Br />Value</Section__Title>
                  <Section__Text><b>Human First</b><br />
                  WEKA CREATIVE is always looking for people who have a talent in every fields. This is priority of what we are considering. We know that people can change the society with brilliant ideas and what they are believing.
                  <br /><br />
                  ​<b>​Be different</b><br />
                  WEKA CREATIVE believe that ‘Be different’ mindset bring creativity, outstanding performance and customer satisfaction. We are putting effort to get out of box and think other ways.
                  </Section__Text>
              </Container>
            </Section03>
            </ScrollAnimation>
            </ScrollAnimation>
      </div>
    </ThemeProvider>
    )
  }
}


export default AboutContainer;