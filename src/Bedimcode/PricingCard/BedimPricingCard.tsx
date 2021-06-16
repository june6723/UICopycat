import React from 'react'
import styled, { css } from 'styled-components'
import './style.css'

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
  ${containerBase}
  padding: 3rem 0;

  @media screen and (max-width: 320px) {
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }
  @media screen and (min-width: 968px) {
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    align-items: center;
  }
`
const Container = styled.div`
  display: grid;
  gap: 3rem 1.25rem;
  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 968px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
const Article = styled.article`
  display: grid;
  position: relative;
  background-color: var(--container-color);
  padding: 2rem 1.5rem 2.5rem;
  border-radius: 1.75rem;
  box-shadow: 0 12px 24px hsla(var(--hue-color), 61%, 16%, .1);
  transition: .4s;

  &:hover {
    box-shadow: 0 16px 24px hsla(var(--hue-color), 61%, 16%, .15);
  }

  @media screen and (max-width: 320px) {
    padding: 2rem 1.25rem;
    border-radius: 1rem;
  }
  @media screen and (min-width: 568px) {
    grid-template-rows: repeat(2, max-content);
  }
`
const Pricing = styled.div`
  position: absolute;
  background: linear-gradient(157deg, var(--first-color-light) -12%, var(--first-color) 109%);
  width: 60px;
  height: 88px;
  right: 1.5rem;
  top: -1rem;
  padding-top: 1.25rem;
  text-align: center;

  &::after,
  &::before {
    content: '';
    position: absolute;
  }
  &::after {
    width: 100%;
    height: 14px;
    background-color: var(--white-color);
    left: 0;
    bottom: -1px;
    clip-path: polygon(0 100%, 50% 0, 100% 100%);
  }
  &::before {
    width: 14px;
    height: 16px;
    background-color: var(--first-color-alt);
    top: 0;
    left: -13px;
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
  }
`
const PricingNumber = styled.div`
  font-family: var(--pricing-font);
  font-size: var(--h2-font-size);
  color: var(--white-color);
`
const PricingSymbol = styled.span`
  font-size: var(--smaller-font-size);
`
const PricingMonth = styled.span`
  display: block;
  font-size: var(--tiny-font-size);
  color: var(--white-color);
`
const Header = styled.header``
const HeaderCircle = styled.div`
  display: grid;
  width: 40px;
  height: 40px;
  background-color: var(--first-color-lighter);
  border-radius: 50%;
  margin-bottom: var(--mb-1);
  place-items: center;

  @media screen and (min-width: 968px) {
    margin-bottom: var(--mb-1-25);
  }
`
const HeaderImg = styled.img`
  width: 30px;
  height: 30px;
`
const HeaderSubtitle = styled.span`
  display: block;
  font-size: var(--smaller-font-size);
  color: var(--text-color-light);
  text-transform: uppercase;
  margin-bottom: var(--mb-0-25);

  @media screen and (min-width: 968px) {
    font-size: var(--small-font-size);
  }
`
const HeaderTitle = styled.h1`
  font-size: var(--biggest-font-size);
  color: var(--title-color);
  margin-bottom: var(--mb-1);
`
const List = styled.ul`
  display: grid;
  row-gap: .5rem;
  margin-bottom: var(--mb-2);
`
const ListItem = styled.li`
  display: flex;
  align-items: center;
`
const I = styled.i`
  font-size: 1.5rem;
  color: var(--first-color);
  margin-right: var(--mb-0-5);
`
const Description = styled.p`
  /* font-size: ; */
`
const Button = styled.button`
  padding: 1.25rem;
  border: none;
  font-size: var(--normal-font-size);
  border-radius: 0.5rem;
  background: linear-gradient(157deg, var(--first-color-light) -12%, var(--first-color) 109%);
  color: var(--white-color);
  cursor: pointer;
  transition: .4s;

  &:hover {
    box-shadow: 0 12px 24px hsla(var(--hue-color), 97%, 54%, .2);
  }
  @media screen and (min-width: 568px) {
    align-self: flex-end;
  }
`

const BedimPricingCard:React.FC = () => {
  return (
    <Wrapper className="bedim-pricingCard">
      <Section>
        <Container>
          {/* === Card 1 === */}
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
              <HeaderTitle>Basic</HeaderTitle>
            </Header>

            <List>
              { DETAILS[0].map((detail, i) => (
                <ListItem key={i}>
                  <I className="uil uil-check"></I>
                  <Description>{detail}</Description>
                </ListItem>
              ))}
            </List>
            
            <Button>Choose this plan</Button>
          </Article>
          {/* === Card 2 === */}
          <Article>
            <Pricing>
              <PricingNumber>
                <PricingSymbol>$</PricingSymbol>19
              </PricingNumber>
              <PricingMonth>/month</PricingMonth>
            </Pricing>
            <Header>
              <HeaderCircle>
                <HeaderImg src="https://raw.githubusercontent.com/bedimcode/responsive-pricing-card/main/assets/img/pro-coin.png" alt="freecoin" />
              </HeaderCircle>
              <HeaderSubtitle>Most popular</HeaderSubtitle>
              <HeaderTitle>Professional</HeaderTitle>
            </Header>

            <List>
              { DETAILS[1].map((detail, i) => (
                <ListItem key={i}>
                  <I className="uil uil-check"></I>
                  <Description>{detail}</Description>
                </ListItem>
              ))}
            </List>
            
            <Button>Choose this plan</Button>
          </Article>
          {/* === Card 3 === */}
          <Article>
          <Pricing>
            <PricingNumber>
              <PricingSymbol>$</PricingSymbol>29
            </PricingNumber>
            <PricingMonth>/month</PricingMonth>
          </Pricing>
          <Header>
            <HeaderCircle>
              <HeaderImg src="https://raw.githubusercontent.com/bedimcode/responsive-pricing-card/main/assets/img/enterprise-coin.png" alt="freecoin" />
            </HeaderCircle>
            <HeaderSubtitle>For agencies</HeaderSubtitle>
            <HeaderTitle>Enterprise</HeaderTitle>
          </Header>

          <List>
            { DETAILS[2].map((detail, i) => (
              <ListItem key={i}>
                <I className="uil uil-check"></I>
                <Description>{detail}</Description>
              </ListItem>
            ))}
          </List>
          
          <Button>Choose this plan</Button>
        </Article>
        </Container>
      </Section>
    </Wrapper>
  )
}

const DETAILS = [
  ["3 user request", "10 downloads por day", "Daily content updates", "Fully editable files"],
  ["100 user request", "Unlimited downloads", "Unlock all features from our site", "Daily content updates", "Fully editable files"],
  ["Unlimited  user request", "Unlimited downloads", "Unlock all features from our site", "Daily content updates", "Fully editable files"]
]

export default BedimPricingCard
