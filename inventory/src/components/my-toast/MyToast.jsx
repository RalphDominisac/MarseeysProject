import { ToastContainer, Toast } from 'react-bootstrap';
import { useState } from 'react';

export default function MyToast(props) {
	const [show, setShow] = useState(props.show);

	return (
		<div
			aria-live="polite"
			aria-atomic="true"
			className="bg-dark position-relative"
		>
			<ToastContainer position="top-end" className="p-3">
				<Toast
					position="top-end"
					className="border border-success bg-success text-white"
					onClose={() => setShow(false)}
					show={show}
					delay={3000}
					autohide
				>
					<Toast.Header className="bg-success text-white" closeButton>
						<strong className="mr-auto">Success</strong>
					</Toast.Header>
					<Toast.Body>{props.message}</Toast.Body>
				</Toast>
			</ToastContainer>
		</div>
	);

	
}
