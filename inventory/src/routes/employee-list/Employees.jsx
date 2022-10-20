import axiosInstance from '../../helpers/axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Table, ButtonGroup, Button } from 'react-bootstrap';

export default function Employees() {
	const navigate = useNavigate();
	const [employees, setEmployees] = useState([]);
	const [sorted, setSorted] = useState(false);

	useEffect(() => {
		axiosInstance
			.get('/employees')
			.then((res) => {
				setEmployees(res.data);
			})
			.catch((error) => {
				console.log('Error: ', error);
			});
	}, []);

	function viewEmployee(employee) {
		navigate('/view', { state: employee });
	}

	function editEmployee(employee) {
		navigate('/edit', { state: employee });
	}

	function deleteEmployee(id) {
		axiosInstance
			.post('/employees/delete/' + id)
			.then((response) => {
				if (response.data !== null) {
					setEmployees(employees.filter((employee) => employee.id !== id));
				}
			})
			.catch((error) => {
				console.log('Error: ', error);
			});
	}

	function sortByName() {
		if (sorted) {
			axiosInstance
				.get('/employees')
				.then((res) => {
					setEmployees(res.data);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
			setSorted(false);
		} else {
			axiosInstance
				.get('/employees/sort/name')
				.then((response) => {
					setEmployees(response.data);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
			setSorted(true);
		}
	}

	function sortByDepartment() {
		if (sorted) {
			axiosInstance
				.get('/employees')
				.then((res) => {
					setEmployees(res.data);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
			setSorted(false);
		} else {
			axiosInstance
				.get('/employees/sort/department')
				.then((response) => {
					setEmployees(response.data);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
			setSorted(true);
		}
	}

	return (
		<div>
			<Card className="border border-dark bg-dark text-white">
				<Card.Header>Employees</Card.Header>
				<Card.Body
					style={{
						overflow: 'auto',
						maxHeight: '45em',
						scrollbarWidth: 'none',
						msOverflowStyle: 'none',
					}}
				>
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
								<th onClick={sortByName}>
									Name <i className="fa fa-caret-down" />
								</th>
								<th onClick={sortByDepartment}>
									Area <i className="fa fa-caret-down" />
								</th>
								{/* <th>
									Backup <i className="fa fa-caret-down" />
								</th> */}
								<th>Email</th>
								<th>Contact No.</th>
								<th>Address</th>
								<th>Shift</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{employees.length === 0 ? (
								<tr>
									<td colSpan={8}>No Employees</td>
								</tr>
							) : (
								employees.map((employee) => (
									<tr key={employee.id}>
										<td>
											{employee.firstName} {employee.lastName}
										</td>
										<td>{employee.department.name}</td>
										<td>{employee.email}</td>
										<td>{employee.contactNo}</td>
										<td>{employee.address}</td>
										<td>
											{employee.shift.start} - {employee.shift.end}
										</td>
										<td>
											<ButtonGroup>
												<Button
													size="sm"
													variant="outline-success"
													onClick={viewEmployee.bind(this, employee)}
												>
													<i className="fa fa-eye" />
												</Button>
												<Button
													size="sm"
													variant="outline-primary"
													onClick={editEmployee.bind(this, employee)}
												>
													<i className="fa fa-edit" />
												</Button>
												<Button
													size="sm"
													variant="outline-danger"
													onClick={deleteEmployee.bind(this, employee.id)}
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
