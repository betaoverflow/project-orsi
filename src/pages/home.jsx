import React from "react";
import styled from "styled-components";

export const Container = styled.div`
	background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
	direction: "flex";
	flex-direction: "row";
	overflow: hidden;
`;

export const Image = styled.img`
	margin-top: 12em;
	margin-left: -5em;
	width: 100%;
	max-width: 40em;
	height: auto;
	top: 0;
	@media only screen and (min-width: 1000px) {
		position: absolute;
	}
`;

export const BackgroundImage = styled.img`
	height: 40em;
	width: 120%;
	@media screen and (min-width: 765px) {
		margin-left: -10em;
	}
	margin-bottom: -2em;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;

export const Heading = styled.div`
	@media screen and (min-width: 765px) {
		font-size: 2.6em;
	}
	@media screen and (max-width: 765px) {
		font-size: 2em;
	}
	position: absolute;
	top: 5em;
	left: 1em;
	font-weight: 600;
	align-item: "justify";
	text-align: left;
`;

export const Content = styled.h5`
	font-size: 0.6em;
	position: absolute;
	color: grey;
	align-item: "justify";
	text-align: left;
	font-weight: 100;
`;
export const Close = styled.div`
	height: 100%;
`;
const Button = styled.button`
	border: 0;
	left: 0;
	margin-top: 3em;
	padding: 10px 1em;
	color: #fff;
	font-size: 18px;
	font-weight: 600;
	border-radius: 5px;
	background-color: royalblue;
	border: 2px solid royalblue;
	transition: all 240ms ease-in-out;
	cursor: pointer;
	box-shadow: 2px 2px 25px #6797e7;
	&:hover {
		color: #fff;
		background-color: royalblue;
	}
`;

function home() {
	return (
		<div>
			<Container>
				<BackgroundImage
					src={require("../assets/images/home-bg.png").default}
				/>
				<Close>
					<Heading>
						Operational Research <br />
						Society Of India, Durgapur
						<Content>
							A forum for Operational Research scientists as well
							as an avenue to widen their horizon by exchange of
							knowledge and application of techniques
							<br />
							<Button>Download Brochure</Button>
						</Content>
					</Heading>
				</Close>
			</Container>
			<Image src={require("../assets/images/robot.png").default}/>
		</div>
	);
}

export default home;
