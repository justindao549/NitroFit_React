import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function SignUpModal(args) {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Button color="danger" onClick={toggle}>
				Sign-Up
			</Button>
			<Modal isOpen={modal} toggle={toggle} {...args}>
				<ModalHeader toggle={toggle}>Sign-up</ModalHeader>
				<ModalBody>
					<Formik>
						<Form>
							<FormGroup>
								<Label htmlFor="firstName">First Name</Label>
								<Field
									name="firstName"
									placeholder="First Name"
									className="form-control"></Field>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="firstName">Last Name</Label>
								<Field
									name="lastName"
									placeholder="Last Name"
									className="form-control"></Field>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="emailAddress">Email Address</Label>
								<Field
									name="emailAddress"
									placeholder="Email Address"
									className="form-control"></Field>
							</FormGroup>
							<FormGroup>
								<Label for="exampleSelect">Select</Label>
								<Input id="exampleSelect" name="select" type="select">
									<option>Premium - $29.99</option>
									<option>Plus - $24.99</option>
									<option>Base - $14.99</option>
								</Input>
							</FormGroup>
						</Form>
					</Formik>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>
						Submit
					</Button>{' '}
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default SignUpModal;
