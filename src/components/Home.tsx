import React from 'react'
import styled from 'styled-components'
import DetectAdBlock from '../CodingNepal/DetectAdBlock/DetectAdBlock'
import PricingCard from '../CodingNepal/PricingCard/PricingCard'

const Wrapper = styled.div``

const Home:React.FC = () => {
  return (
    <Wrapper>
      <DetectAdBlock />
      <PricingCard />
    </Wrapper>
  )
}

export default Home
