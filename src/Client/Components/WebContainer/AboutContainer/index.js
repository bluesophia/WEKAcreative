import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from '../../../../Assets/Styles/Themes';
import { Section01,
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


class AboutContainer extends Component {
  render(){
    return(
      <ThemeProvider theme={Themes}>   
      <div>
            <Section01>
            {/* <Section01__ImageTop><MainImageBackground src={mainImage2_1}/></Section01__ImageTop> */}
              <Section01__Container>             
                <Section01__TitleDiv>
                    <Section01__Title>About Us</Section01__Title>
                    <Section01__Text>We deliver outstanding work experience to people who want to increase productivity, cost effectiveness and time saving for the work process. ‘WEKA CREATIVE’ supports the business to integrate management system, make easy and better working performance.
                    </Section01__Text>
                </Section01__TitleDiv>
                <Section01__Image><MainImage src={mainImage}/></Section01__Image>
                <Section01__Image2><MainImage2 src={mainImage2}/></Section01__Image2> 
              </Section01__Container>
            </Section01>
            <Section02>
              <Container>
                    <Section__Title>The Mission</Section__Title>
                    <Section__Text>
                        Who we are (3 ‘We’)<br />
                        We are the professional digital consultant and agency.<br />
                        We are the decision makers to develop better business industry.<br />
                        We are the explorer to find new ideas and technology for support society. 
                    </Section__Text>
                </Container>
            </Section02>
            <Section02>
              <Container>
                  <Section__Title>The Vision</Section__Title>
                  <Section__Text><b>Future Trend Setter</b><br />
                  <b><i>WEKA CREATIVE sails to undiscovered the ocean of technology.</i></b><br />
                  We will become the pioneer of future technology and provide things to people have no experience yet. We will discover the potentials and opportunities around us so that WEKA CREATIVE become a leader in technology industries.<br /><br />
                  ​<b>A standard digital consultant</b><br />
                  <b><i>WEKA CREATIVE will provide the guide how people are survived in unexpected future technology.</i></b><br />
                  ​​As we are digital agency in the society, WEKA CREATIVE will deliver an advise and right way guide to expand the range of strategy and foresight. We are focusing deep understanding and being sensitive on human behaviour to find out the hustling in life.</Section__Text>
              </Container>
            </Section02>
            <Section03>
              <Container>
                  <Section__Title>Core Value</Section__Title>
                  <Section__Text><b>Human First</b><br />
                  WEKA CREATIVE is always looking for people who have a talent in every fields. This is priority of what we are considering. We know that people can change the society with brilliant ideas and what they are believing.
                  <br /><br />
                  ​<b>​Be different</b><br />
                  WEKA CREATIVE believe that ‘Be different’ mindset bring creativity, outstanding performance and customer satisfaction. We are putting effort to get out of box and think other ways.
                  </Section__Text>
              </Container>
            </Section03>
      </div>
    </ThemeProvider>
    )
  }
}


export default AboutContainer;