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
const HueInput = styled.input``
const Wrapper = styled.div<HueProps>`
  font-family: 'Poppins', sans-serif;
  width: 720px;
  border-radius: 15px;
  box-shadow: 0px 12px 24px ${props => `hsla(${props.hue}, 61%, 16%, 0.1)`};
  background: #fff;
`
const Header = styled.header<HueProps>`
  font-size: 22px;
  font-weight: 600;
  padding: 20px 30px;
  border-bottom: 1px solid ${props => `hsla(${props.hue}, 12%, 65%)`};
`
const Form = styled.form`
  margin: 35px 30px;
`
const DblField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`
const Field = styled.div`
  height: 50px;
  width: calc(100% / 2 - 13px);
  position: relative;
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
    border: 2px solid ${props => `hsla(${props.hue}, 96%, 40%)`};
  }
  &:focus ~ i {
    color: ${props => `hsla(${props.hue}, 96%, 40%)`};
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
    border: 2px solid ${props => `hsla(${props.hue}, 96%, 40%)`};
  }
  &:focus ~ i {
    color: ${props => `hsla(${props.hue}, 96%, 40%)`};
  }
`
const ButtonArea = styled.div`
  margin: 25px 0;
  display: flex;
  align-items: center;
`
const Button = styled.button<HueProps>`
  padding: 13px 25px;
  font-size: 18px;
  border: none;
  color: #fff;
  ${props => `background: linear-gradient(157deg, hsl(${props.hue}, 96%, 54%, .9) -5%, hsl(${props.hue}, 96%, 40%) 120%);`}
  border-radius: 5px;
  cursor: pointer;
`
const Span = styled.span<HueProps>`
  ${props => `color: hsl(${props.hue}, 96%, 54%);`}
  margin-left: 30px;
`

const ContactForm: React.FC = () => {
  const [hue, setHue] = useState(300)

  const handleSubmit = (
    e:React.MouseEvent<HTMLButtonElement, MouseEvent>
    ):void => {
    e.preventDefault()
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
            <Button hue={hue} type="submit" onClick={handleSubmit}>Send Message</Button>
            <Span hue={hue}>Sending your message...</Span>
          </ButtonArea>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default ContactForm
