import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`
const TitleDiv = styled.div``
const Form = styled.form``
const FormRow = styled.div``
const FormRowTextArea = styled.div``
const FormRowSubmit = styled.div``
const InputData = styled.div``
const Input = styled.input``
const Lable = styled.label``
const TextArea = styled.textarea``
const Inner = styled.div``

const ResponsiveContackUsForm: React.FC = () => {
  return (
    <Container>
      <TitleDiv>Responsive Contact us Form</TitleDiv>
      <Form>
        <FormRow>
          <InputData>
            <Input type="text" />
            <Lable>First Name</Lable>
          </InputData>
          <InputData>
            <Input type="text" />
            <Lable>Last Name</Lable>
          </InputData>
        </FormRow>
        <FormRow>
          <InputData>
            <Input type="text" />
            <Lable>Email Address</Lable>
          </InputData>
          <InputData>
            <Input type="text" />
            <Lable>Website Name</Lable>
          </InputData>
        </FormRow>
        <FormRowTextArea>
          <InputData>
            <TextArea cols={30} rows={10}></TextArea>
            <Lable>Email Address</Lable>
          </InputData>
        </FormRowTextArea>
        <FormRowSubmit>
          <InputData>
            <Inner></Inner>
            <Input type="submit" value="submit" />
          </InputData>
        </FormRowSubmit>
      </Form>
    </Container>
  )
}

export default ResponsiveContackUsForm
