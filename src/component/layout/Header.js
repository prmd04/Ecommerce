import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Badge, Container, Dropdown, Navbar } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { ctx } from "../Store/Context";

const Header = () => {
  const CartCtx = useContext(ctx);
  const len = CartCtx.state.items.length;

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="flex">
        <Navbar.Brand>
          <Link to="/home" className="link">Home</Link> 
        </Navbar.Brand> 

        <Navbar.Brand>
          <Link to="/about" className="link">About</Link> 
        </Navbar.Brand> 

        <Navbar.Brand>
          <Link to="/" className="link">Store</Link> 
        </Navbar.Brand> 

        <Dropdown alignRight={false} style={{ width: "300px" }}>
          <Dropdown.Toggle variant="success">
            <FaShoppingCart color="white" fontSize="25px" />
            <Badge style={{ margin: 5, fontSize: 15 }}>{len}</Badge>
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
