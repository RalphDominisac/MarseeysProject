import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/marseeys-icon.png';

export default function NavigationBar({ to }) {
	function logout() {
		localStorage.removeItem('token');
	}

	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand as={Link} to="/employees" className="navbar-brand">
				<img src={logo} width="32" height="32" alt="brand" className="ms-3" />{' '}
				Marseey's Human Resource Management
			</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link as={Link} to="/employees" className="nav-link">
					Home
				</Nav.Link>
				<Nav.Link as={Link} to="/new" className="nav-link">
					Create Employee
				</Nav.Link>
				{/* <Nav.Link as={Link} to="/admin/register" className="nav-link">
					Create Account
				</Nav.Link> */}
				{/* <Nav.Link as={Link} to="/" className="nav-link">
					Change Password
				</Nav.Link> */}
				{/* <Nav.Link as={Link} to="/login" onClick={logout} className="nav-link">
					Log out
				</Nav.Link> */}
			</Nav>
		</Navbar>
	);
}
