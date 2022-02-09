import React from "react";
import { useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import "../App.css";

function PlayList({ img, description, title, playPlayList }) {
	const [showPlayButton, setShowPlayButton] = useState(false);
	const handleMouseEnter = (e) => {
		setShowPlayButton(true);
	};
	const handleMouseLeave = (e) => {
		setShowPlayButton(false);
	};
	return (
		<div
			className="play-list"
			onMouseOver={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Card className="play-list-card border-0 rounded-3">
				<div>
					<CardImg
						className="play-list-img"
						alt="Card image cap"
						width="200px"
						height="200px"
						src={img}
						top
					/>
				</div>
				{showPlayButton ? (
					<button className="btnOnCard" onClick={playPlayList}>
						<i className="fa fa-play" style={{ color: "black" }}></i>
					</button>
				) : (
					""
				)}
				<CardBody>
					<CardTitle tag="h5">{title}</CardTitle>
					<CardText>{description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}
export default PlayList;
