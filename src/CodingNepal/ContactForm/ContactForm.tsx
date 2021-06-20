import React, { useState } from 'react'
import styled from 'styled-components'

interface HueProps {
  hue: number
}

const Container = styled.div<HueProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 30px;
  ${props => `background: hsl(${props.hue}, 100%, 99%);`}
  
`
const HueInputDiv = styled.div<HueProps>`
  display: flex;
  flex-direction: column;
  /* margin-right: 10px; */
  border-radius: 5px;
  padding: 5px 10px;
  width: 80px;
  align-items: center;
`
const Lable = styled.label`
  font-size: 14px;
`
const HueInput = styled.input<HueProps>`
  width: 100%;
  text-align: center;
  border: none;  
  font-size: 16px;
  padding: 3px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus::placeholder {
    color: transparent;
  }
`
const ColorBall = styled.div<HueProps> `
  width: 36px;
  height: 36px;
  border-radius: 50%;
  ${props => (
    props.hue ?
    `background: linear-gradient(157deg, hsl(${props.hue}, 96%, 68%, .9) -5%, hsl(${props.hue}, 96%, 56%) 120%);` :
    `background: hsl(0,0%,90%);`
  )}
  box-shadow: 0 3px 3px ${props => `hsla(${props.hue}, 12%, 35%, .2)`};
  
  border: 1px solid ${props => `hsl(${props.hue}, 12%, 96%)`};
  margin-right: 20px;
`
const Wrapper = styled.div<HueProps>`
  font-family: 'Poppins', sans-serif;
  width: 540px;
  border-radius: 15px;
  box-shadow: 0px 12px 24px ${props => `hsla(${props.hue}, 61%, 16%, 0.1)`};
  background: #fff;
  position: relative;

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`
const Header = styled.header<HueProps>`
  font-size: 22px;
  font-weight: 600;
  padding: 20px 30px;
  border-bottom: 1px solid ${props => `hsla(${props.hue}, 12%, 65%)`};
  color: ${props => `hsla(${props.hue}, 12%, 15%)`};

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`
const Form = styled.form`
  margin: 35px 30px;
`
const DblField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 600px) {
   flex-direction: column;
   margin-bottom: 0px;
  }
`
const Field = styled.div`
  height: 50px;
  width: calc(100% / 2 - 13px);
  position: relative;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 20px;
  }
`
const Input = styled.input<HueProps>`
  height: 100%;
  width: 100%;
  font-size: 16px;
  outline: none;
  padding: 0 18px 0 48px;
  border-radius: 5px;
  border: 1px solid ${props => `hsla(${props.hue}, 12%, 65%)`};

  &::placeholder{
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
  &:focus {
    border: 2px solid ${props => `hsla(${props.hue}, 96%, 52%)`};
  }
  &:focus ~ i {
    color: ${props => `hsla(${props.hue}, 96%, 52%)`};
  }
`
const I = styled.i<HueProps>`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 17px;
  pointer-events: none;
  color: ${props => `hsla(${props.hue}, 12%, 65%)`};
`
const MessageI = styled.i<HueProps>`
  position: absolute;
  left: 18px;
  top: 30px;
  transform: translateY(-50%);
  font-size: 22px;
  pointer-events: none;
  color: ${props => `hsla(${props.hue}, 12%, 65%)`};
`
const MessageDiv = styled.div`
  position: relative;
`
const TextArea = styled.textarea<HueProps>`
  height: 100%;
  width: 100%;
  font-size: 16px;
  outline: none;
  padding: 0 18px 0 48px;
  border-radius: 5px;
  border: 1px solid ${props => `hsla(${props.hue}, 12%, 65%)`};
  min-height: 120px;
  max-height: 300px;
  min-width: 100%;
  max-width: 100%;
  padding: 15px 20px 0 48px;

  &::placeholder{
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
  &:focus {
    border: 2px solid ${props => `hsla(${props.hue}, 96%, 52%)`};
  }
  &:focus ~ i {
    color: ${props => `hsla(${props.hue}, 96%, 52%)`};
  }

  @media screen and (max-width: 600px) {
    resize: none;
  }
`
const ButtonArea = styled.div`
  margin: 25px 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`
const Button = styled.button<HueProps>`
  padding: 13px 25px;
  font-size: 18px;
  border: none;
  color: #fff;
  ${props => `background: linear-gradient(157deg, hsl(${props.hue}, 96%, 54%, .9) -5%, hsl(${props.hue}, 96%, 40%) 120%);`}
  border-radius: 5px;
  cursor: pointer;
  transition: all .3s ease;
  opacity: 1;

  &:hover {
    opacity: 0.95;
    ${props => `box-shadow: 0 6px 12px hsla(${props.hue}, 97%, 54%, .2);`}
    
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`
const Span = styled.span<HueProps>`
  ${props => `color: hsl(${props.hue}, 96%, 54%);`}
  margin-left: 30px;
  display: none;

  @media screen and (max-width: 600px) {
    text-align: center;
    margin: 20px 0;
  }
`

const ContactForm: React.FC = () => {
  const [hue, setHue] = useState(210)
  const [checkHue, setCheckHue] = useState(hue)

  const handleSubmit = (
    e:React.MouseEvent<HTMLButtonElement, MouseEvent>
    ):void => {
    e.preventDefault()
    if (checkHue){
      setHue(checkHue)
    } else {

    }
  }

  const handleChange = (
    e:React.ChangeEvent<HTMLInputElement>
    ) => {
    setCheckHue(e.target.valueAsNumber)
  }

  return (
    <Container hue={hue}>
      {/* <HueInput type="number" /> */}
      <Wrapper hue={hue}>
        <Header hue={hue}>Send us a Message</Header>
        <Form>
          <DblField>
            <Field>
              <Input hue={hue} type="text" placeholder="Enter you name" />
              <I hue={hue} className="fas fa-user" />
            </Field>
            <Field>
              <Input hue={hue} type="text" placeholder="Enter you email" />
              <I hue={hue} className="fas fa-envelope" />
            </Field>
          </DblField>
          <DblField>
            <Field>
              <Input hue={hue} type="text" placeholder="Enter you phone" />
              <I hue={hue} className="fas fa-phone-alt" />
            </Field>
            <Field>
              <Input hue={hue} type="text" placeholder="Enter you website" />
              <I hue={hue} className="fas fa-globe" />
            </Field>
          </DblField>
          <MessageDiv>
            <TextArea hue={hue} placeholder="Write your message" />
            <MessageI hue={hue} className="material-icons">message</MessageI>
          </MessageDiv>
          <ButtonArea>
            <HueInputDiv hue={hue}>
              <Lable htmlFor="hue">HUE</Lable>
              <HueInput hue={hue} onChange={handleChange} name="hue" type="number" min="0" max="360" placeholder="0~360" />
            </HueInputDiv>
            <ColorBall hue={checkHue} />
            <Button hue={hue} type="submit" onClick={handleSubmit}>Change Hue</Button>
            {/* <Span hue={hue}>Sending your message...</Span> */}
          </ButtonArea>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default ContactForm
