import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/marseeys-icon.png';

export default function NavigationBar({ to }) {
	function logout() {
		localStorage.removeItem('token');
	}

	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand as={Link} to="/inventory" className="navbar-brand">
				<img src={logo} width="32" height="32" alt="brand" className="ms-3" />{' '}
				Marseey's Inventory
			</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link as={Link} to="/inventory" className="nav-link">
					Home
				</Nav.Link>
				<Nav.Link as={Link} to="/create" className="nav-link">
					Add Ingredient
				</Nav.Link>
				<Nav.Link as={Link} to="/transactions" className="nav-link">
					Transactions
				</Nav.Link>
				<Nav.Link as={Link} to="/stock-in" className="nav-link">
					Stock-In
				</Nav.Link>
				<Nav.Link as={Link} to="/stock-out" className="nav-link">
					Stock-Out
				</Nav.Link>
				{/* <Nav.Link as={Link} to="/login" onClick={logout} className="nav-link">
					Log out
				</Nav.Link> */}
			</Nav>
		</Navbar>
	);
}
