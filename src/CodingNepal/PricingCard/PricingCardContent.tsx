import React from 'react'
import styled from 'styled-components'

const CardsArea = styled.div`
  overflow: hidden;
`
const Cards = styled.div`
  width: 300%;
  display: flex;  
`
const Row = styled.div<{ index:number, current: number }>`
  width:33.4%;
  transition: all 0.3s ease;
  margin-left: ${props => {  
    if (props.index === 0) {
      switch (props.current) {
        case 0:
          return '0%'
        case 1:
          return '-33.4%'
        case 2:
          return '-66.8%'
      }
    }
  }};
`
const PricingDetail = styled.div`
  margin: 20px 0;
  text-align: center;
  padding-bottom: 25px;
  border-bottom: 1px solid #e6e6e6;
`
const Price = styled.span`
  font-size: 65px;
  font-weight: 600;
  font-family: 'Noto Sans', sans-serif;
  position: relative;

  &::before,
  &::after {
    position: absolute;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  &::before {
    content: "$";
    font-size: 20px;
    left:-13px;
    top: 17px;
  }
  &::after {
    content:"/mon";
    font-size: 13px;
    right: -33px;
    bottom:17px;
  }
`
const PriceP = styled.p`
  font-size: 18px;
  margin-top: 5px;
`
const Features = styled.ul``
const FeatureLi = styled.li`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-bottom: 10px;
  list-style: none;
`
const CheckIcon = styled.i`
  color: #77a5f8;
`
const FeatureSpan = styled.span`
  margin-left: 10px;
`
const Button = styled.button`
  height: 55px;
  width: 100%;
  margin-right: 20px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  border-radius: 30px;
  background: linear-gradient(145deg,#d5a3ff 0%, #77a5f8 100%);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(0.98);
  }
`
interface Props {
  current:number, 
  setCurrent:React.Dispatch<React.SetStateAction<number>>
}

const PricingCardContent:React.FC<Props> = ({ current, setCurrent}) => {
  return (
    <CardsArea>
      <Cards>
        {PLANS.map((plan, i) => (
          <Row key={i} index={i} current={current}>
            <PricingDetail>
              <Price>{plan.price}</Price>
              <PriceP>{plan.description}</PriceP>
            </PricingDetail>
            <Features>
              {plan.features.map((feature, j) => (
                <FeatureLi
                  key={j}
                >
                  <CheckIcon className="fas fa-check" />
                  <FeatureSpan>
                    {feature}
                  </FeatureSpan>
                </FeatureLi>
              ))}
            </Features>
          </Row>
        ))}
      </Cards>
      <Button>Choose plan</Button>
    </CardsArea>
  )
}

const PLANS = [
  {
    price: 19,
    description: 'For beginner use',
    features:[
      '100 GB Premium Bandwidth',
      'FREE 50+ Installation Scripts WordPress Supported', 
      'One FREE Domain Registration .com and .np extensions only',
      'Unlimited Email Accounts & Databases'
    ]
  },
  {
    price: 99,
    description: 'For professional use',
    features:[
      'Unlimited GB Premium Bandwidth', 
      'FREE 200+ Installation Scripts WordPress Supported', 
      'Five FREE Domain Registration .com and .np extensions only',
      'Unlimited Email Accounts & Databases'
    ],
  },
  {
    price: 49,
    description: 'For team collaboration',
    features:[
      '200 GB Premium Bandwidth',
      'FREE 100+ Installation Scripts WordPress Supported',
      'Two FREE Domain Registration .com and .np extensions only',
      'Unlimited Email Accounts & Databases'
    ],
  }, 
]

export default PricingCardContent
