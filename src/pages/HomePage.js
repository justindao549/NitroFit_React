import {
	Container,
	Row,
	Col,
	Card,
	Button,
	CardTitle,
	CardText,
} from 'reactstrap';
import ClassesPage from './ClassesPage';
import React from 'react';
import video from '../app/assets/ShortWorkoutVideo.mov';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import {
	faYoutube,
	faTwitter,
	faInstagram,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';
const HomePage = () => {
	return (
		<Container fluid className="p-0">
			{/* <SubHeader current="Home" /> */}
			<div>
				<div className="banner-card">
					<div className="banner-text text-center">
						<div
							style={{
								background:
									'linear-gradient(45deg, rgba(52, 52, 52, 0) 50%, white 50%)',
								width: '15%',
								aspectRatio: 1 / 1,
								position: 'absolute',
								top: 0,
								right: 0,
								padding: 0,
								margin: 0,
							}}></div>
						<div>
							<div style={{ fontSize: '20vw' }}>
								<span className="RedAcc"> N</span>
								<span className="GreyAcc ">F</span>
							</div>
							<p
								className="text-center"
								style={{ color: 'white', fontSize: '1.5vmax' }}>
								Transform your life
							</p>
						</div>
						<div
							style={{
								background:
									'linear-gradient(45deg, white 50%,rgba(52, 52, 52, 0) 50%)',
								width: '15%',
								aspectRatio: 1 / 1,
								position: 'absolute',
								bottom: 0,
								padding: 0,
							}}></div>
					</div>
				</div>
				<video src={video} autoPlay loop muted></video>
			</div>
			<Container>
				<Row>
					<Col className=" p-0 my-5 d-flex align-middle">
						<FontAwesomeIcon icon={faYoutube} size="3x" />
						<FontAwesomeIcon icon={faTwitter} size="3x" />
						<FontAwesomeIcon icon={faInstagram} size="3x" />
						<FontAwesomeIcon icon={faFacebook} size="3x" />
					</Col>
				</Row>
				<Row className="my-5 mx-5 About-Border">
					<h1 className="my-3 text-left">WE GET THINGS DONE</h1>
					<h3 className="my-3 text-left">About Us</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</Row>
				{/* <ClassesPage /> */}
			</Container>
		</Container>
	);
};

export default HomePage;
