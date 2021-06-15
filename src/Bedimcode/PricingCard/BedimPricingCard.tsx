import React from 'react'
import styled, { css } from 'styled-components'

const containerBase = css`
  max-width: 1024px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
`

const Wrapper = styled.div`
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);

  ul {
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`
const Section = styled.section`
  display: grid;
`

const Container = styled.div`
  display: grid;
`
const Article = styled.article`
  display: grid;
`
const Pricing = styled.div``
const PricingNumber = styled.div``
const PricingSymbol = styled.span``
const PricingMonth = styled.span``
const Header = styled.header``
const HeaderCircle = styled.div`
  display: grid;
`
const HeaderImg = styled.img``
const HeaderSubtitle = styled.span``

const BedimPricingCard:React.FC = () => {
  return (
    <Wrapper className="bedim-pricingCard">
      <Section>
        <Article>
          <Pricing>
            <PricingNumber>
              <PricingSymbol>$</PricingSymbol>0
            </PricingNumber>
            <PricingMonth>/month</PricingMonth>
          </Pricing>
          <Header>
            <HeaderCircle>
              <HeaderImg src="https://raw.githubusercontent.com/bedimcode/responsive-pricing-card/main/assets/img/free-coin.png" alt="freecoin" />
            </HeaderCircle>
            <HeaderSubtitle>Free plan</HeaderSubtitle>
            
          </Header>
        </Article>
      </Section>
    </Wrapper>
  )
}

export default BedimPricingCard
