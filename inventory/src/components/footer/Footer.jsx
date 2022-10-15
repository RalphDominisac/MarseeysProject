import { Container, Navbar, Col } from 'react-bootstrap';

export default function Footer() {
	let fullYear = new Date().getFullYear();

	return (
		<Navbar fixed="bottom" bg="dark" variant="dark">
			<Container>
				<Col className="text-center text-muted">
					<div>{fullYear} - {fullYear+1}, All Rights Reserved by Marseey's</div>
				</Col>
			</Container>
		</Navbar>
	);
}
