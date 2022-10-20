import { Card, Form, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axiosInstance from '../../../helpers/axios';
import { useLocation } from 'react-router-dom';

export default function ViewEmployee() {
    const location = useLocation();
    const viewEmployee = location.state;
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

        setEmployeeRequest({
            firstName: viewEmployee.firstName, 
            lastName: viewEmployee.lastName, 
            sex: viewEmployee.sex,
            email: viewEmployee.email,
            contactNo: viewEmployee.contactNo,
            civilStatus: viewEmployee.civilStatus,
            birthday: viewEmployee.birthday,
            shift: viewEmployee.shift.id,
            address: viewEmployee.address,
            department: viewEmployee.department.id,
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
					<i className="fa fa-eye" /> Employee
				</Card.Header>
				<Form
					id="employeeFormId"
				>
					<Card.Body>
						<Row>
							<Form.Group as={Col} controlId="formGridFirstName">
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="text"
									name="firstName"
									required disabled
									autoComplete="off"
									value={employeeRequest.firstName}
									className="bg-dark text-muted"
									placeholder="John"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridLastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="text"
									name="lastName"
									required disabled
									autoComplete="off"
									value={employeeRequest.lastName}
									className="bg-dark text-muted"
									placeholder="Doe"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridSex">
								<Form.Label>Sex</Form.Label>
								<Form.Control
									as="select"
									name="sex"
									required disabled
									value={employeeRequest.sex}
									className="bg-dark text-muted"
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
									required disabled
									value={employeeRequest.birthday}
									className="bg-dark text-muted"
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
									required disabled
									value={employeeRequest.civilStatus}
									className="bg-dark text-muted"
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
									required disabled
									autoComplete="off"
									value={employeeRequest.email}
									className="bg-dark text-muted"
									placeholder="onetwothree@abc.com"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridContactNo">
								<Form.Label>Contact No</Form.Label>
								<Form.Control
									type="number"
									name="contactNo"
									required disabled
									autoComplete="off"
									value={employeeRequest.contactNo}
									className="bg-dark text-muted"
									placeholder="01234567890"
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
									required disabled
									value={employeeRequest.department}
									className="bg-dark text-muted"
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
									required disabled
									value={employeeRequest.shift}
									className="bg-dark text-muted"
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
									required disabled
									autoComplete="off"
									value={employeeRequest.address}
									className="bg-dark text-muted"
									placeholder="ABC Street, 12345, ABC City"
								/>
							</Form.Group>
						</Row>
					</Card.Body>
					<Card.Footer>
						Created on: {viewEmployee.created}
					</Card.Footer>
				</Form>
			</Card>
		</div>
	);
}
