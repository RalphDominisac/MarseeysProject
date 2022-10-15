import { useState, useEffect } from 'react';
import axiosInstance from '../../helpers/axios';
import { Card, Table } from 'react-bootstrap';

export default function TransactionList() {
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		if (transactions.length === 0) {
			axiosInstance
				.get('/transactions')
				.then((response) => {
					setTransactions(response.data);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Card className="border border-dark bg-dark text-white">
			<Card.Header>Transaction List</Card.Header>
			<Card.Body>
				<Table striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>Date</th>
							<th>Ingredient</th>
							<th>Remarks</th>
							<th>Quantity Involved</th>
							<th>Current Quantity</th>
						</tr>
					</thead>
					<tbody>
						{transactions.length === 0 ? (
							<tr>
								<td colSpan={6}>No Transaction Made</td>
							</tr>
						) : (
							transactions.map((transaction) => (
								<tr key={transaction.id}>
									<td>{transaction.date}</td>
									<td>{transaction.ingredient.name}</td>
									<td>{transaction.remarks}</td>
									<td>
										{transaction.quantity} {transaction.ingredient.unitMeasure}
									</td>
									<td>
										{transaction.quantity - transaction.amountUsed >= 0 && (
											<span>
												{transaction.quantity - transaction.amountUsed}{' '}
												{transaction.ingredient.unitMeasure}
											</span>
										)}
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
