import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: #FCFBFC;
`
const Nav = styled.nav`
  position: absolute;
  background-color: inherit;
  width: inherit;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
`
const Title = styled.h1`
  color:#f1356d;
  margin-bottom: 50px;
`
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`
const Li = styled.li`
  padding: 0.3rem 1rem;
  cursor: pointer;
  border-radius: 0.8rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #f5f5f5;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
    transform: scale(1.02)
  }
`
const SLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #ABAFB7;
  color: #333;
`
const Icon = styled.i`
  font-size: 24px;
  margin-top: 4px;
`
const Span = styled.span`
  font-size: 12px;
  font-weight: 700;
`
const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Nav>
        <Title>UI CopyCat</Title>
        <Ul>
          <Li>
            <SLink to="/">
              <Icon className="fas fa-home" />
              <Span>Home</Span>
            </SLink>
          </Li>
        </Ul>
      </Nav>
    </Wrapper>
  )
}
export default Navbar