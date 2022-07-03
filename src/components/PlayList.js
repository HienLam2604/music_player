import React from "react";
import { useState, useEffect, useRef } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import "../App.css";

function PlayList({ img, description, title }) {
	const [showPlayButton, setShowPlayButton] = useState(false);
	const [songs, setSongs] = useState([]);
	const audioRef = useRef();
	const fetchSongs = async () => {
		const res = await fetch(
			"https://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1"
		);
		const data = await res.json();
		setSongs(data.data);
	};
	useEffect(() => {
		fetchSongs();
	}, []);
	const handleMouseEnter = (e) => {
		setShowPlayButton(true);
	};
	const handleMouseLeave = (e) => {
		setShowPlayButton(false);
	};
	const handleBtnPlay = (e) => {
		audioRef.current.src =
			"https://zingmp3.vn/album/Dam-Cuoi-Nha-Single-Hong-Thanh-DJ-Mie/6BIFUZ9E.mp3";
		audioRef.current.play();
		console.log(audioRef.current.src);
	};
	return (
		<div
			className="play-list"
			onMouseOver={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<audio preload="none" ref={audioRef} src="" />
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
					<button className="btnOnCard" onClick={handleBtnPlay}>
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
