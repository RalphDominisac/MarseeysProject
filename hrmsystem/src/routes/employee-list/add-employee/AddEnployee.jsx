import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axiosInstance from '../../../helpers/axios';

export default function AddEmployee() {
	const [employeeRequest, setEmployeeRequest] = useState({
		firstName: '',
		lastName: '',
		sex: '',
		email: '',
		contactNo: '',
		civilStatus: '',
		birthday: '',
		shift: '',
		address: '',
		department: '',
	});

	const [civilStatuses, setCivilStatuses] = useState([
		'Single',
		'Married',
		'Divorced',
		'Separated',
		'Widowed',
	]);

	const [sexes, setSexes] = useState(['Male', 'Female', 'Other']);
	const [department, setDepartment] = useState([]);
	const [shifts, setShifts] = useState([]);

	useEffect(() => {
		axiosInstance
			.get('/shifts')
			.then((response) => {
				setShifts(response.data);
			})
			.catch((error) => {
				console.log('Error: ', error);
			});

		axiosInstance
			.get('/departments')
			.then((response) => {
				setDepartment(response.data);
			})
			.catch((error) => {
				console.log('Error: ', error);
			});
	}, []);

	function resetForm() {
		setEmployeeRequest({
			firstName: '',
			lastName: '',
			sex: '',
			email: '',
			contactNo: '',
			civilStatus: '',
			birthday: '',
			shift: '',
			address: '',
			department: '', 
		});
	}

	function submitEmployeeRequest(event) {
		event.preventDefault();

		axiosInstance
			.post('/employees/add', employeeRequest)
			.then((response) => {
				if (response.data !== null) {
					resetForm();
				}
			})
			.catch((error) => {
				console.log('Error: ', error);
			});
	}

	function handleChange(event) {
		setEmployeeRequest({
			...employeeRequest,
			[event.target.name]: event.target.value,
		});
	}

	function tConvert(time) {
		time = time
			.toString()
			.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

		if (time.length > 1) {
			// If time format correct
			time = time.slice(1); // Remove full string match value
			time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
			time[0] = +time[0] % 12 || 12; // Adjust hours
		}
		return time.join(''); // return adjusted time or original string
	}

	return (
		<div>
			<Card className="border border-dark bg-dark text-white">
				<Card.Header>
					<i className="fa fa-plus-square" /> Employee
				</Card.Header>
				<Form
					onReset={resetForm}
					onSubmit={submitEmployeeRequest}
					id="employeeFormId"
				>
					<Card.Body>
						<Row>
							<Form.Group as={Col} controlId="formGridFirstName">
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="text"
									name="firstName"
									required
									autoComplete="off"
									value={employeeRequest.firstName}
									className="bg-dark text-white"
									placeholder="John"
									onChange={handleChange}
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridLastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="text"
									name="lastName"
									required
									autoComplete="off"
									value={employeeRequest.lastName}
									className="bg-dark text-white"
									placeholder="Doe"
									onChange={handleChange}
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridSex">
								<Form.Label>Sex</Form.Label>
								<Form.Control
									as="select"
									name="sex"
									required
									value={employeeRequest.sex}
									className="bg-dark text-white"
									onChange={handleChange}
								>
									<option key="blankChoice" hidden>
										Select gender
									</option>
									{sexes.map((sex) => (
										<option key={sex} value={sex}>
											{sex}
										</option>
									))}
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridBirthday">
								<Form.Label>Birthday</Form.Label>
								<Form.Control
									type="date"
									name="birthday"
									required
									value={employeeRequest.birthday}
									className="bg-dark text-white"
									onChange={handleChange}
									max={
										new Date().getFullYear() -
										18 +
										'-' +
										(new Date().getMonth() + 1) +
										'-' +
										new Date().getDate()
									}
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridCivilStatus">
								<Form.Label>Civil Status</Form.Label>
								<Form.Control
									as="select"
									name="civilStatus"
									required
									value={employeeRequest.civilStatus}
									className="bg-dark text-white"
									onChange={handleChange}
								>
									<option key="blankChoice" hidden>
										Select civil status
									</option>
									{civilStatuses.map((status) => (
										<option key={status} value={status}>
											{status}
										</option>
									))}
								</Form.Control>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									name="email"
									required
									autoComplete="off"
									value={employeeRequest.email}
									className="bg-dark text-white"
									placeholder="onetwothree@abc.com"
									onChange={handleChange}
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridContactNo">
								<Form.Label>Contact No</Form.Label>
								<Form.Control
									type="number"
									name="contactNo"
									required
									autoComplete="off"
									value={employeeRequest.contactNo}
									className="bg-dark text-white"
									placeholder="01234567890"
									onChange={handleChange}
									style={{
										WebkitAppearance: 'none',
										MozAppearance: 'textfield',
									}}
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridDepartment">
								<Form.Label>Area</Form.Label>
								<Form.Control
									as="select"
									name="department"
									required
									value={employeeRequest.department}
									className="bg-dark text-white"
									onChange={handleChange}
								>
									<option key="blankChoice" hidden value>
										Select area
									</option>
									{department.map((department) => (
										<option key={department.id} value={department.id}>
											{department.name}
										</option>
									))}
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridShift">
								<Form.Label>Shift</Form.Label>
								<Form.Control
									as="select"
									name="shift"
									required
									value={employeeRequest.shift}
									className="bg-dark text-white"
									onChange={handleChange}
								>
									<option key="blankChoice" hidden value>
										Select shift
									</option>
									{shifts.map((shift) => (
										<option key={shift.id} value={shift.id}>
											{tConvert(shift.start)} - {tConvert(shift.end)}
										</option>
									))}
								</Form.Control>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group as={Col} controlId="formGridAddress">
								<Form.Label>Address</Form.Label>
								<Form.Control
									as="textarea"
									name="address"
									required
									autoComplete="off"
									value={employeeRequest.address}
									className="bg-dark text-white"
									placeholder="ABC Street, 12345, ABC City"
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
