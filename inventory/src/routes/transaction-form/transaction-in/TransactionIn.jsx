import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axiosInstance from '../../../helpers/axios';

export default function TransactionIn() {
	const [transactionInRequest, setTransactionInRequest] = useState({
		ingredient: '',
		quantity: '',
		remarks: '',
		expiryDate: '',
	});
	const [ingredients, setIngredients] = useState([]);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (ingredients.length === 0) {
			axiosInstance
				.get('/ingredient')
				.then((response) => {
					setIngredients(response.data);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
		}
	}, []);

	function submitTransactionInRequest(event) {
		event.preventDefault();

		axiosInstance
			.post('/transactions/create/in', transactionInRequest)
			.then((response) => {
				if (response.data !== null) {
					setShow(true);
					resetForm();
				}
			})
			.catch((error) => {
				console.log('Error: ', error);
			});
	}

	function resetForm() {
		setTransactionInRequest({
			ingredient: '',
			quantity: '',
			remarks: '',
			expiryDate: '',
		});
	}

	function handleChange(event) {
		setTransactionInRequest({
			...transactionInRequest,
			[event.target.name]: event.target.value,
		});
	}

	return (
		<div>
			<div></div>
			<Card className="border border-dark bg-dark text-white">
				<Card.Header>
					<i className="fa fa-plus-square" /> Transaction
				</Card.Header>
				<Form
					onReset={resetForm}
					onSubmit={submitTransactionInRequest}
					id="transactionInFormId"
				>
					<Card.Body>
						<Row>
							<Form.Group as={Col} controlId="formGridIngredient">
								<Form.Label>Ingredient</Form.Label>
								<Form.Control
									as="select"
									name="ingredient"
									required
									value={transactionInRequest.ingredient.id}
									className="bg-dark text-white"
									onChange={handleChange}
								>
									<option key="blankChoice" hidden value>
										Select Ingredient
									</option>
									{ingredients.map((ingredient) => (
										<option key={ingredient.id} value={ingredient.id}>
											{ingredient.name}
										</option>
									))}
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridQuantity">
								<Form.Label>Quantity Involved</Form.Label>
								<Form.Control
									type="number"
									name="quantity"
									value={transactionInRequest.quantity}
									required
									autoComplete="off"
									className="bg-dark text-white"
									placeholder="Enter quantity added"
									onChange={handleChange}
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridDate">
								<Form.Label>Expiry Date</Form.Label>
								<Form.Control
									type="date"
									name="expiryDate"
									value={transactionInRequest.expiryDate}
									required
									className="bg-dark text-white"
									onChange={handleChange}
									min={new Date().toISOString().split('T')[0]}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group as={Col} controlId="formGridRemarks">
								<Form.Label>Remarks</Form.Label>
								<Form.Control
									type="text"
									name="remarks"
                                    required 
									value={transactionInRequest.remarks}
									className="bg-dark text-white"
									onChange={handleChange}
								/>
							</Form.Group>
						</Row>
					</Card.Body>
					<Card.Footer>
						<Button size="sm" variant="success" type="submit">
							<i className="fa fa-save" /> Submit
						</Button>
						{'  '}
						<Button size="sm" variant="info" type="reset">
							<i className="fa fa-undo" /> Clear
						</Button>
					</Card.Footer>
				</Form>
			</Card>
		</div>
	);
}
