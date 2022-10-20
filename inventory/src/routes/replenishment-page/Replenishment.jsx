import axiosInstance from '../../helpers/axios';
import { useEffect, useState } from 'react';
import { Card, Table, ButtonGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Replenishment() {
	const [toBeReplenished, setToBeReplenished] = useState([]);
    const [sorted, setSorted] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (toBeReplenished.length === 0) {
			axiosInstance
				.get('/ingredient/report')
				.then((response) => {
					setToBeReplenished(response.data);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function editIngredient(ingredient) {
		navigate('/edit/ingredient', { state: ingredient });
	}

	function deleteIngredient(id) {
		axiosInstance
			.post('/ingredient/delete/' + id)
			.then((response) => {
				if (response.data !== null) {
					setToBeReplenished(
						toBeReplenished.filter((ingredient) => ingredient.id !== id)
					);
				}
			})
			.catch((error) => {
				console.log('Error: ', error);
			});
	}

	function sortByName() {
		if (sorted) {
			axiosInstance
				.get('/ingredient/report')
				.then((response) => {
					setToBeReplenished(response.data);
					setSorted(false);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
		} else {
			axiosInstance
				.get('/ingredient/sort/name')
				.then((response) => {
					setToBeReplenished(response.data);
					setSorted(true);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
		}
	}

	function sortByCategory() {
		if (sorted) {
			axiosInstance
				.get('/ingredient/report')
				.then((response) => {
					setToBeReplenished(response.data);
					setSorted(false);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
		} else {
			axiosInstance
				.get('/ingredient/sort/category')
				.then((response) => {
					setToBeReplenished(response.data);
					setSorted(true);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
		}
	}

	function sortByQuantity() {
		if (sorted) {
			axiosInstance
				.get('/ingredient/report')
				.then((response) => {
					setToBeReplenished(response.data);
					setSorted(false);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
		} else {
			axiosInstance
				.get('/ingredient/sort/quantity')
				.then((response) => {
					setToBeReplenished(response.data);
					setSorted(true);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
		}
	}

	return (
		<Card className="border border-dark bg-dark text-white">
			<Card.Header>To Be Replenished</Card.Header>
			<Card.Body
				style={{
					overflow: 'auto',
					maxHeight: '25em',
					scrollbarWidth: 'none',
					msOverflowStyle: 'none',
				}}
			>
				<Table striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>#</th>
							<th onClick={sortByName}>
								Name <i className="fa fa-caret-down" />
							</th>
							<th onClick={sortByCategory}>
								Category <i className="fa fa-caret-down" />
							</th>
							<th onClick={sortByQuantity}>
								Quantity <i className="fa fa-caret-down" />
							</th>
							<th>Reorder Point</th>
							<th>Last Updated</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{toBeReplenished.length === 0 ? (
							<tr>
								<td colSpan={6}>No Ingredients to be Replenished</td>
							</tr>
						) : (
							toBeReplenished.map((ingredient) => (
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
									<td>{ingredient.lastUpdate}</td>
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
													onClick={deleteIngredient.bind(
														this,
														ingredient.id
													)}
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
	);
}
