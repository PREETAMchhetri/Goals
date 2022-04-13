import {FaUser, FaSignInAlt, FaSignOutAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap'

function Header() {
  return (
    
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                
            <Navbar.Brand>
                <Link to ='/'>GoalSetter</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

            <Nav className='mx-auto'>
                <Link to='/login'>
                    <FaSignInAlt />Login
                </Link>
                <Link to='/register'>
                    <FaUser />Register
                </Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>

  ) 
}

export default Header