import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  width:100%;
  height: 90vh;
  background: linear-gradient(135deg, #9b27ca 0%, #9927cf 0%, #d33639 100%, #f92121 100%);
  position: relative;
`
const Wrapper = styled.div<{ show: boolean }>`
  position: absolute;
  max-width: 480px;
  width:100%;
  top:50%;
  left: 50%;
  opacity: ${(props)=> props.show ? 1 : 0 };
  pointer-events: ${props => props.show ? "auto" : "none"};
  background: #fff;
  border-radius: 15px;
  padding: 40px 30px;
  transform: translate(-50%, -50%) ${props => props.show ? "scale(1)" : "scale(1.2)"};
  box-shadow: 10px 10px 15px rgba(0,0,0,0.06);
  transition: opacity 0.2s 0s ease-in-out,
              transform 0.2s 0s ease-in-out;
`
const Content = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const WarnIcon = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 115px;
  width: 115px;
  border-radius: 50%;
  background: linear-gradient(#9b27ca 0%, #9927cf 0%, #d33639 100%, #f92121 100%);
`

const IconSpan = styled.div`
  height: 100px;
  width: 100px;
  background: #fff;
  border-radius: inherit;
  display:flex;
  align-items: center;
  justify-content: center;
`
const Icon = styled.i`
  font-size: 50px;
  background: linear-gradient(#9b27ca 0%, #9927cf 0%, #d33639 100%, #f92121 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`
const H2 = styled.h2`
  margin-top: 35px;
  font-size: 32px;
`
const Description = styled.p`
  font-size: 19px;
  text-align: center;
  margin-top: 20px;
`
const Button = styled.button`
  margin-top: 30px;
  padding: 10px 30px;
  font-size: 18px;
  border: none;
  outline:none;
  color:#fff;
  border-radius: 50px;
  cursor:pointer;
  background: linear-gradient(135deg, #9b27ca 0%, #9927cf 0%, #d33639 100%, #f92121 100%);
`


let adClasses = ['ad', "ads", "adsbox", "ad-placement", "doubleclick", "ad-placeholder", "ad-badge"]

const DetectAdBlock:React.FC = () => {
  const detectRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState<boolean>(false)

  useEffect(():void => {
    if (detectRef.current) {
      for(let item of adClasses) {
        detectRef.current.classList.add(item)
      }
      setShow(window.getComputedStyle(detectRef.current).getPropertyValue('display') === "block" ? true : false)
      
    }
  }, [detectRef.current])

  return (
    <>
      <div ref={detectRef} />
      <Container>
        <Wrapper ref={wrapperRef} show={show} >
          <Content>
            <WarnIcon>
              <IconSpan><Icon className="fas fa-exclamation" /></IconSpan>
            </WarnIcon>
            <H2>AdBlock Detected!</H2>
            <Description>Our website is made possible by displaying ads to our visitors. Please supporting us by whitelisting our website.</Description>
            <Button onClick={(e) => {
              e.preventDefault()
              setShow(false)
            }}>Okay, I'll whitelist</Button>
          </Content>
        </Wrapper>
      </Container>
    </>
  )
}

export default DetectAdBlock
