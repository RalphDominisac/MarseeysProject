import { Button, ButtonGroup, Card, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../helpers/axios';
import Replenishment from '../replenishment-page/Replenishment';

export default function TransactionInList() {
	const [ingredients, setIngredients] = useState([]);
	const [transactionIns, setTransactionIns] = useState([]);
	const [sorted, setSorted] = useState(false);
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

		if (transactionIns.length === 0) {
			axiosInstance
				.get('/transactions')
				.then((response) => {
					setTransactionIns(response.data);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function editTransaction(transactionIn) {
		navigate('/edit/transaction', { state: transactionIn });
	}

	function deleteTransaction(id) {
		axiosInstance
			.post('/transactions/delete/' + id)
			.then((response) => {
				if (response.data !== null) {
					setTransactionIns(
						transactionIns.filter((transactionIn) => transactionIn.id !== id)
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
				.get('/transactions')
				.then((response) => {
					setTransactionIns(response.data);
					setSorted(false);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
		} else {
			axiosInstance
				.get('/transactions/sort/name')
				.then((response) => {
					setTransactionIns(response.data);
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
				.get('/transactions')
				.then((response) => {
					setTransactionIns(response.data);
					setSorted(false);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
		} else {
			axiosInstance
			.get('/transactions/sort/category')
			.then((response) => {
				setTransactionIns(response.data);
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
				.get('/transactions')
				.then((response) => {
					setTransactionIns(response.data);
					setSorted(false);
				})
				.catch((error) => {
					console.log('Error: ', error);
					setSorted(true);
				});
		} else {
			axiosInstance
			.get('/transactions/sort/quantity')
			.then((response) => {
				setTransactionIns(response.data);
				setSorted(true);
			})
			.catch((error) => {
				console.log('Error: ', error);
			});
		}
	}

	function sortByExpiry() {
		if (sorted) {
			axiosInstance
				.get('/transactions')
				.then((response) => {
					setTransactionIns(response.data);
					setSorted(false);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
		} else {
			axiosInstance
			.get('/transactions/sort/expiry')
			.then((response) => {
				setTransactionIns(response.data);
				setSorted(true);
			})
			.catch((error) => {
				console.log('Error: ', error);
			});
		}
	}

	return (
		<div>
			<Card className="border border-dark bg-dark text-white">
				<Card.Header>Ingredient List</Card.Header>
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
								<th>Total Quantity</th>
								<th onClick={sortByQuantity}>
									Available <i className="fa fa-caret-down" />
								</th>
								<th onClick={sortByExpiry}>
									Expiry <i className="fa fa-caret-down" />
								</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{transactionIns.length === 0 ? (
								<tr>
									<td colSpan={7}>No Ingredients Available</td>
								</tr>
							) : (
								transactionIns.map((transactionIn) => (
									<tr key={transactionIn.id}>
										<td>{transactionIn.ingredient.id}</td>
										<td>{transactionIn.ingredient.name}</td>
										<td>{transactionIn.ingredient.ingredientCategory.name}</td>
										<td>
											{transactionIn.ingredient.quantity}{' '}
											{transactionIn.ingredient.unitMeasure}
										</td>
										<td>
											{transactionIn.quantity - transactionIn.amountUsed}{' '}
											{transactionIn.ingredient.unitMeasure}
										</td>
										<td>{transactionIn.expiryDate}</td>
										<td>
											<ButtonGroup>
												<Button
													size="sm"
													variant="outline-primary"
													onClick={editTransaction.bind(this, transactionIn)}
												>
													<i className="fa fa-edit" />
												</Button>
												<Button
													size="sm"
													variant="outline-danger"
													onClick={deleteTransaction.bind(
														this,
														transactionIn.id
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
			<br />
			<Replenishment />
		</div>
	);
}
