import { Button, ButtonGroup, Card, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../helpers/axios';
import MyToast from '../../components/my-toast/MyToast';

export default function IngredientList() {
	const [ingredients, setIngredients] = useState([]);
	const [show, setShow] = useState(false);
	const navigate = useNavigate();

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

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function editIngredient(ingredient) {
		navigate("/edit", { state: ingredient });
	}

	function deleteIngredient(id) {
		axiosInstance
			.post('/ingredient/delete/' + id)
			.then((response) => {
				if (response.data !== null) {
					setShow(true);
					setIngredients(
						ingredients.filter((ingredient) => ingredient.id !== id)
					);
				}
			})
			.catch((error) => {
				console.log('Error: ', error);
			});
	}

	return (
		<div>
			<div>
				<MyToast show={show} message="Ingredient deleted successfully!" />
			</div>
			<Card className="border border-dark bg-dark text-white">
				<Card.Header>Ingredient List</Card.Header>
				<Card.Body>
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Category</th>
								<th>Quantity</th>
								<th>Reorder Point</th>
								<th>Latest Expiry</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{ingredients.length === 0 ? (
								<tr>
									<td colSpan={6}>No Ingredients Available</td>
								</tr>
							) : (
								ingredients.map((ingredient) => (
									<tr key={ingredient.id}>
										<td>{ingredient.id}</td>
										<td>{ingredient.name}</td>
										<td>{ingredient.ingredientCategory.name}</td>
										<td>
											{ingredient.quantity} {ingredient.unitMeasure}
										</td>
										<td>
											{ingredient.threshold} {ingredient.unitMeasure}
										</td>
										<td>{ingredient.expiryDate}</td>
										<td>
											<ButtonGroup>
												<Button
													size="sm"
													variant="outline-primary"
													onClick={editIngredient.bind(this, ingredient)}
												>
													<i className="fa fa-edit" />
												</Button>
												<Button
													size="sm"
													variant="outline-danger"
													onClick={deleteIngredient.bind(this, ingredient.id)}
												>
													<i className="fa fa-trash" style={{ color: 'red' }} />
												</Button>
											</ButtonGroup>
										</td>
									</tr>
								))
							)}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</div>
	);
}
