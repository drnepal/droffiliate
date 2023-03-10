import React from 'react';	
import { Navbar, Nav,Container}from 'react-bootstrap'

const Header = () => {
	return (
		<header>
		<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
		
			  <Navbar.Brand href= '/'>Buyhere</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
			  <Nav className='mr-auto'>

					<Nav.Link href = '/login'>Sign In
					</Nav.Link>

		
			  </Nav>
			</Navbar.Collapse>
	
		</Navbar>
	  </header>
	)
}
export default Header