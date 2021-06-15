import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding:40px;
  background: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);
  font-family: 'Poppins', sans-serif;
`
const Container = styled.div`
  background: #fff;
  max-width: 800px;
  padding: 25px 40px 10px 40px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);

  @media screen and (max-width: 700px) {
    padding: 10px 0 0 0 0;
  }
`
const TitleDiv = styled.div`
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 700px) {
    font-size: 30px;
  }
`
const Form = styled.form`
  padding: 30px 0 0 0;
`
const FormRow = styled.div`
  display: flex;
  margin: 32px 0;

  @media screen and (max-width: 700px) {
    display: block;
  }
`
const InputData = styled.div<{ TA?:boolean, submit?:boolean }>`
  width: 100%;
  height: 40px;
  margin: 0 20px;
  position: relative;
  
  ${props => (
    props.TA && `height:70px;`
  )}
  ${props => (
    props.submit && `
      height: 45px!important;
      width: 25%!important;
      overflow: hidden;
      border-radius:5px;
      &:hover > div {
        left: 0;
      }
    `
  )}

  @media screen and (max-width: 700px) {
    margin: 35px 0!important;
    ${props => (
      props.submit && `width: 40%!important;`
    )}
  }
`
const Input = styled.input`
  display: block;
  height: 100%;
  width: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid rgba(0,0,0,0.12);
  outline: none;

  &:focus ~ label,
  &:valid ~ label {
    transform: translateY(-20px);
    color: #3498db;
    font-size: 14px;
  }
  &:focus ~ div:before, div:after,
  &:valid ~ div:before, div:after {
    transform: scaleX(1);
  }
`
const Underline = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;

  &::before,
  &::after {
    position: absolute;
    content: ""; 
    height: 100%;
    width: 100%;
    background: #3498db;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.2s ease;
  }
`
const Lable = styled.label<{ TA?:boolean }>`
  position: absolute;
  bottom: 10px;
  font-size: 16px;
  pointer-events: none;
  transition: all 0.2s ease;
  ${props => (
    props.TA && `width: 100%; bottom:40px; background:#fff;`
  )}
`
const TextArea = styled.textarea`
  display: block;
  height: 100%;
  width: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid rgba(0,0,0,0.12);
  resize: none; 
  padding-top: 10px;
  outline: none;

  &:focus ~ label,
  &:valid ~ label {
    transform: translateY(-20px);
    color: #3498db;
    font-size: 14px;
  }
  &:focus ~ div:before, div:after,
  &:valid ~ div:before, div:after {
    transform: scaleX(1);
  }
`
const Inner = styled.div`
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);;
  transition: all 0.2s;
`
const Submit = styled.input`
  display: block;
  height: 100%;
  width: 100%;
  border: none;
  border-bottom: 2px solid rgba(0,0,0,0.12);
  outline: none;
  position: relative;
  z-index: 2;
  background: none;
  border: none;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  /* letter-spacing: 1px; */
  cursor: pointer;
`

const ResponsiveContackUsForm: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <TitleDiv>Responsive Contact us Form</TitleDiv>
        <Form>
          <FormRow>
            <InputData>
              <Input type="text" required/>
              <Underline />
              <Lable>First Name</Lable>
            </InputData>
            <InputData>
              <Input type="text" required/>
              <Underline />
              <Lable>Last Name</Lable>
            </InputData>
          </FormRow>
          <FormRow>
            <InputData>
              <Input type="text"required/>
              <Underline />
              <Lable>Email Address</Lable>
            </InputData>
            <InputData>
              <Input type="text" required/>
              <Underline />
              <Lable>Website Name</Lable>
            </InputData>
          </FormRow>
          <FormRow>
            <InputData TA>
              <TextArea cols={30} rows={10} required />
              <Underline />
              <Lable TA>Write your message</Lable>
              <br />
            </InputData>
          </FormRow>
          <FormRow>
            <InputData submit>
              <Inner></Inner>
              <Submit type="submit" value="submit" />
            </InputData>
          </FormRow>
        </Form>
      </Container>
    </Wrapper>
  )
}

export default ResponsiveContackUsForm
