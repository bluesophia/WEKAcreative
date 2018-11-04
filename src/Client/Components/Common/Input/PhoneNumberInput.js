import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';

export default class PhoneNumberInput extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    // const { value } = this.state;
    return (
      <ThemeProvider theme={Themes}>
      <Container>
      <Label_Div>  
      <Label>Phone Number</Label><P>Required</P><br />
      </Label_Div> 
        <Input
            type="tel"
            value={this.state.value}
            name="phone"
            label="phone"
            onChange={this._handleChange}
            placeholder="09-234-2345"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
        />
      </Container>
      </ThemeProvider>
    )
  }
}
const Container = styled.div`
  padding-left: 0;
  margin-top: 0;
  width: 100%;
  height: 100%;
  margin-bottom:50px;
  ${breakpoint('lg')`
   margin-bottom:0px;
  `}
`
const Label_Div = styled.div`
  display: flex;
  align-items: flex-end;
`
const Label = styled.label`
  font-size: ${Themes.fontsize.p2}
  font-weight: ${Themes.fontWeight.black}
  color: ${Themes.colors.black};
  `

const P = styled.p`
  font-size: ${Themes.fontsize.p4};
  font-weight: ${Themes.fontWeight.bold};
  color: ${Themes.colors.w_red};
  margin: 0;
  margin-left: 10px;
  padding:0;
`

const Input = styled.input.attrs({
  type: 'Email',
})`
  box-sizing:border-box;
  width:100%;
  height:30px;
  background: none;
  border-radius:0px;
  border:0;
  border-bottom: 1px solid ${Themes.colors.formGrey};
  color: ${Themes.colors.formGrey};
  padding: 0.5em;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
  ${breakpoint('lg')`
     width:70%;
  `}
`