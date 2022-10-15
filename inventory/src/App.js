import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import NavigationBar from './components/navigation/NavigationBar';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<Container>
				<Row>
					<Col className="mt-3">
						<Outlet />
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
