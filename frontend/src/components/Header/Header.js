import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../actions/userActions";


const Header = () =>{
  const history = useHistory();

  const dispatch=useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");  
  };

  return (
    <Navbar bg="primary" expand="lg" varient="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">SRILANKA RAILWAY</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="m-auto">
                
            </Nav>



        
          <Nav  >
            
            <NavDropdown title={`${userInfo?.name}`} id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                
                   <NavDropdown.Divider/>
                   <NavDropdown.Item 
                   onClick={logoutHandler}>
                       Logout
                   </NavDropdown.Item>
            </NavDropdown>
            </Nav>
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;