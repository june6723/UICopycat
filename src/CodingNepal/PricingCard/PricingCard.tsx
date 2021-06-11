import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import PricingCardContent from './PricingCardContent'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background: linear-gradient(#d5a3ff 0%, #77a5f8 100%);
`
const Wrapper = styled.div`
  width: 400px;
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 10px 10px 15px rgba(0,0,0,0.05);
`
const Header = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  height: 55px;
  border: 1px solid #ccc;
  border-radius: 30px;
`
const TabInput = styled.input`
  display: none;
`

const TabLabel = styled.label<{ index: number, current:number }>`
  height: 100%;
  width: ${props => props.index === 1 ? "40%" : "30%" };
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  color: ${props => (props.current === props.index ? "#fff" : "black")};
  transition: all 0.3s ease;
`
const Slider = styled.div<{current:number}>`
  position: absolute;
  height: 85%;
  background: linear-gradient(145deg,#d5a3ff 0%, #77a5f8 100%);
  border-radius: inherit;
  transition: all 0.3s ease;

  ${props => {
    switch (props.current) {
      case 0:
        return ('left: 0%; width:90px; transform: translateX(5%);')
      case 1:
        return 'left: 50%; width:120px; transform: translateX(-50%);'
      case 2:
        return 'left: 100%; width:90px; transform: translateX(-105%);'
    }
  }}
`

const TABLIST = ["Basic", "Standard", "Team"]

const PricingCard: React.FC = () => {
  const [current, setCurrent] = useState<number>(1)

  const handleClick = useCallback((index:number) => {
    setCurrent(index)
  }, [setCurrent])

  return (
    <Container>
      <Wrapper>
        {TABLIST.map((item, index) => (
          <TabInput 
            key={index}
            type="radio"
            name="slider"
            id={item}
            onClick={() => handleClick(index)}
          />
        ))}
        <Header>
          {TABLIST.map((item, index) => (
            <TabLabel 
              key={index} 
              htmlFor={item}
              index={index}
              current={current}
              onClick={() => handleClick(index)}
            >
              {item}
            </TabLabel>
          ))}
          <Slider current={current} id="tabSlider" />
        </Header>
        <PricingCardContent current={current} setCurrent={setCurrent} />
      </Wrapper>
    </Container>
  )
}

export default PricingCard
