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
import IngredientList from './routes/ingredient-list/IngredientList';
import AddIngredientForm from './routes/ingredient-form/add-ingredient-form/AddIngredientForm';
import EditIngredientForm from './routes/ingredient-form/edit-ingredient-form/EditIngredientForm';
import TransactionList from './routes/transaction-list/TransactionList';
import TransactionIn from './routes/transaction-form/transaction-in/TransactionIn';
import TransactionOut from './routes/transaction-form/transaction-out/TransactionOut';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="" element={<IngredientList />}></Route>
					<Route path="edit" element={<EditIngredientForm />} />
					<Route path="create" element={<AddIngredientForm />}></Route>
					<Route path="transactions" element={<TransactionList />}></Route>
					<Route path="stock-in" element={<TransactionIn />}></Route>
					<Route path="stock-out" element={<TransactionOut />}></Route>
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
