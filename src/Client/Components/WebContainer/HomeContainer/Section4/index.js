import React, { Component } from 'react';

import {Section04,
    Container,
    Section04__LeftDiv,
    Section04__TitleDiv,
    Section04__Title,
    Section04__Text,
    Section04__Contents,
    Section04__ContentDiv,
    Section04__Image,
    Section04__Image2,
    Section04_ImgText,
    Section04__Contents2,
    Section04__Wrap
} from './style'

/** Images **/
import AI from '../../../../../Assets/Images/ai.svg';
import MachineLearning from '../../../../../Assets/Images/machinelearning.svg';
import Blockchain from '../../../../../Assets/Images/blockchain.svg';
import ArgumentedReality from '../../../../../Assets/Images/argumentedreality.svg';
import GPS from '../../../../../Assets/Images/gps.svg';
import Automation from '../../../../../Assets/Images/automation.svg';
import LeveragetheFuture from '../../../../../Assets/Images/LeveragetheFuture.svg';
import LeveragetheFuture2 from '../../../../../Assets/Images/LeveragetheFuture2.svg';
import { _breakpoint } from 'styled-components-breakpoint/dist/cjs/core';

/** Components **/
import YellowSpan from '../../../Common/YellowSpan';

class Section4 extends Component{
    render(){
        return(
            <Section04>
                <Container>
                    <Section04__LeftDiv>
                        <Section04__TitleDiv>
                            <Section04__Title>Leverage the future</Section04__Title>
                            <YellowSpan />
                            <Section04__Text>Use our expertise to keep your business on the cutting
                            edge of new technology</Section04__Text>
                        </Section04__TitleDiv>
                        <Section04__Contents>
                        {/* <Section04__Wrap>
                            <Section04__ContentDiv>
                                <Section04__Image src={AI} />
                                <div>
                                    <Section04_ImgText>AI</Section04_ImgText>
                                </div>
                            </Section04__ContentDiv>
                            <Section04__ContentDiv>
                                <Section04__Image src={MachineLearning} />
                                <div>
                                    <Section04_ImgText>Machine <br/>learning</Section04_ImgText>
                                </div>
                            </Section04__ContentDiv>
                            <Section04__ContentDiv>
                                <Section04__Image src={Blockchain} />
                                <div>
                                    <Section04_ImgText>Blockchain</Section04_ImgText>
                                </div>
                            </Section04__ContentDiv>
                            </Section04__Wrap>
                            <Section04__Wrap>
                            <Section04__ContentDiv>
                                <Section04__Image src={ArgumentedReality} />
                                <div>
                                    <Section04_ImgText>Argumented <br/>reality</Section04_ImgText>
                                </div>
                            </Section04__ContentDiv>
                            <Section04__ContentDiv>
                                <Section04__Image src={GPS} />
                                <div>
                                    <Section04_ImgText>GPS <br/>integration</Section04_ImgText>
                                </div>
                            </Section04__ContentDiv>
                            <Section04__ContentDiv>
                                <Section04__Image src={Automation} />
                                <div>
                                    <Section04_ImgText>Advanced <br/>automation</Section04_ImgText>
                                </div>
                            </Section04__ContentDiv>  
                            </Section04__Wrap> */}
                            <Section04__Image2 src={LeveragetheFuture2} />
                        </Section04__Contents>
                        <Section04__Contents2>
                                <Section04__Image src={LeveragetheFuture} />
                        </Section04__Contents2>
                    </Section04__LeftDiv>
                </Container>
            </Section04>
        )
    }
}

export default Section4;