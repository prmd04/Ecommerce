import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Badge, Container, Dropdown, Navbar } from "react-bootstrap";
import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="flex">
        <Navbar.Brand>Home</Navbar.Brand>
        <Navbar.Brand>Store</Navbar.Brand>
        <Navbar.Brand>About</Navbar.Brand>
        <Dropdown alignRight={false} style={{ width: "300px" }}>
          <Dropdown.Toggle variant="success">
            <FaShoppingCart color="white" fontSize="25px" />
            <Badge style={{ margin: 5, fontSize: 15 }}>{0}</Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{
              width: "600px",
              maxHeight: "400px",
              overflowY: "auto",
              left: "50%",
              transform: "translateX(-60%)",
            }}
          >
            <Dropdown.Item>
              <Cart />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
