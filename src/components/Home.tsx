import React from 'react'
import styled from 'styled-components'
import BedimPricingCard from '../Bedimcode/PricingCard/BedimPricingCard'
import DetectAdBlock from '../CodingNepal/DetectAdBlock/DetectAdBlock'
import PricingCard from '../CodingNepal/PricingCard/PricingCard'
import ResponsiveContackUsForm from '../CodingNepal/ResponsiveContactUsForm/ResponsiveContackUsForm'
import ContactForm from '../CodingNepal/ContactForm/ContactForm'

const Wrapper = styled.div``

const Home:React.FC = () => {
  return (
    <Wrapper>
      <ContactForm />
      <BedimPricingCard />
      <ResponsiveContackUsForm />
      <DetectAdBlock />
      <PricingCard /> 
    </Wrapper>
  )
}

export default Home
