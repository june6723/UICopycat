import React from 'react'
import styled from 'styled-components'
import BedimPricingCard from '../Bedimcode/PricingCard/BedimPricingCard'
import DetectAdBlock from '../CodingNepal/DetectAdBlock/DetectAdBlock'
import PricingCard from '../CodingNepal/PricingCard/PricingCard'
import ResponsiveContackUsForm from '../CodingNepal/ResponsiveContactUsForm/ResponsiveContackUsForm'

const Wrapper = styled.div``

const Home:React.FC = () => {
  return (
    <Wrapper>
      {/* <BedimPricingCard /> */}
      <ResponsiveContackUsForm />
      <DetectAdBlock />
      <PricingCard />
    </Wrapper>
  )
}

export default Home
