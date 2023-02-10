import {
	Container,
	Row,
	Col,
	Card,
	Button,
	CardTitle,
	CardText,
} from 'reactstrap';
import React from 'react';

const ClassesPage = () => {
	return (
		<Container>
			<Row className="py-2 px-5">
				<Col md="4" sm="6">
					<Card body className="shadow card-style mt-3">
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button className="redAccentBg">Go somewhere</Button>
					</Card>
				</Col>
				<Col md="4" sm="6">
					<Card body className="shadow card-style mt-3">
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button className="redAccentBg">Go somewhere</Button>
					</Card>
				</Col>
				<Col md="4" sm="6">
					<Card body className="shadow card-style mt-3">
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button>Go somewhere</Button>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default ClassesPage;
