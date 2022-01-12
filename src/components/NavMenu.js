import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function NavMenu() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href='/'>Buy My Time</Navbar.Brand>
        <Nav>
          <Nav.Link href='/calendar'>Calendar</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
