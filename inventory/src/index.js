import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './routes/error-page/ErrorPage';
import EmptyPage from './routes/empty-page/EmptyPage';
import Login from './routes/login-page/Login';
import Employees from './routes/employee-list/Employees';
import AddEmployee from './routes/employee-list/add-employee/AddEnployee';
import EditEmployee from './routes/employee-list/edit-employee/EditEmployee';
import ViewEmployee from './routes/employee-list/view-employee/ViewEmployee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<Login />}></Route>
				<Route path="signup" element={<Login />}></Route>
				<Route path="/" element={<App />}>
					<Route path="employees" element={<Employees />}></Route>
					<Route path="new" element={<AddEmployee />}></Route>
					<Route path="edit" element={<EditEmployee />}></Route>
					<Route path="view" element={<ViewEmployee />}></Route>
					<Route path="*" element={<EmptyPage />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
