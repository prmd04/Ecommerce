import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Badge, Container, Dropdown, Navbar, } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container className='flex'>
        <Navbar.Brand>Home</Navbar.Brand>
        <Navbar.Brand>Store</Navbar.Brand>
        <Navbar.Brand>About</Navbar.Brand>
        <Dropdown alignRight>
          <Dropdown.Toggle variant='success'>
          <FaShoppingCart color="white" fontSize="25px"/>
          <Badge style={{margin:5, fontSize:15}}>{0}</Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <span style={{padding:10}}>Cart is Empty!</span>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  )
}

export default Header