import React, { useState, useEffect, useRef } from "react";
import {
	Row,
	Button,
	Progress,
	Card,
	CardBody,
	CardTitle,
	CardText,
	CardImg,
	Container,
	Col,
} from "reactstrap";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import classNames from "classnames";
import songs from "./Data";
import "../App.css";
import FirstRow from "./FirstRow";

function Player() {
	const [isplaying, setIsplaying] = useState(true);
	const [isRandom, setIsRandom] = useState(false);
	const [isRepeat, setIsRepeat] = useState(false);
	const [volume, setVolume] = useState(100);
	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [songProgress, setSongProgress] = useState(0);
	const audioRef = useRef();
	const progressRef = useRef();

	useEffect(() => {
		document.title = songs[currentSongIndex].name;
	}, [currentSongIndex]);
	useEffect(() => {
		if (localStorage.hasOwnProperty("CurrentSongIndex")) {
			loadConfig();
		}
	}, []);

	const setConfig = (key, value) => {
		localStorage.setItem(key, value);
	};
	const getConfig = (key) => {
		return localStorage.getItem(key);
	};
	const loadConfig = () => {
		setCurrentSongIndex(parseInt(getConfig("CurrentSongIndex")));
		setIsRandom(getConfig("isRandom"));
		setIsRepeat(getConfig("isRepeat"));
		setSongProgress(getConfig("Progress"));
		audioRef.current.currentTime = getConfig("Progress");
		audioRef.current.load();
	};
	const playSong = () => {
		const playPromise = audioRef.current.play();
		if (playPromise !== undefined) {
			playPromise
				.then((_) => {
					audioRef.current.play();
				})
				.catch((error) => {
					audioRef.current.load();
					audioRef.current.play();
				});
		}
		setConfig("CurrentSongIndex", currentSongIndex);
	};
	const pauseSong = () => {
		audioRef.current.pause();
	};
	const handleBtnPlay = () => {
		if (isplaying) {
			playSong();
		} else {
			pauseSong();
		}
		setIsplaying(!isplaying);
	};

	const handleBtnRandom = () => {
		setConfig("isRandom", !isRandom);
		setIsRandom(!isRandom);
	};
	const handleBtnRepeat = () => {
		setConfig("isRepeat", !isRepeat);
		setIsRepeat(!isRepeat);
	};
	const playRandomSong = () => {
		let newIndex;
		do {
			newIndex = Math.floor(Math.random() * songs.length);
		} while (newIndex === currentSongIndex);
		setCurrentSongIndex(newIndex);
	};
	const nextSong = () => {
		if (currentSongIndex >= songs.length - 1) {
			setCurrentSongIndex(0);
		}
		if (isRandom) {
			playRandomSong();
		} else {
			setCurrentSongIndex(currentSongIndex + 1);
		}
		setSongProgress(0);
		setIsplaying(false);
		playSong();
		document.title = songs[currentSongIndex].name;
	};
	const prevSong = () => {
		if (currentSongIndex <= 0) {
			setCurrentSongIndex(songs.length - 1);
		}
		if (isRandom) {
			playRandomSong();
		} else {
			setCurrentSongIndex(currentSongIndex - 1);
		}
		setSongProgress(0);
		setIsplaying(false);
		playSong();
		document.title = songs[currentSongIndex].name;
	};
	const upDateProgress = () => {
		setSongProgress(
			(audioRef.current.currentTime / audioRef.current.duration) * 100
		);
		setConfig("Progress", songProgress);
	};
	const songEnded = () => {
		if (audioRef.current.ended) {
			if (isRepeat) {
				setSongProgress(0);
				playSong();
			} else {
				nextSong();
			}
		}
	};
	const seekSong = (e) => {
		console.log(e.target.value);
	};
	return (
		<>
			<div>
				<FirstRow playPlayList={handleBtnPlay} />
			</div>
			<div className="h-auto fixed-bottom">
				<audio
					preload="none"
					ref={audioRef}
					src={songs[currentSongIndex].src}
					onTimeUpdate={upDateProgress}
					onEnded={songEnded}
				/>

				<Progress
					ref={progressRef}
					onClick={seekSong}
					style={{ height: "3px" }}
					value={songProgress}
					max="100"
					min="0"
				></Progress>
				<Container fluid className="bg-light text-black">
					<Row className="player p-2 ">
						<Col xs="4">
							<div className="d-flex">
								<Card
									className="d-flex flex-row"
									style={{ maxWidth: "80px", border: "none" }}
								>
									<CardImg
										id="thumnail"
										className="rounded-start"
										src={songs[currentSongIndex].image}
										height="87px"
										alt="error"
									/>
									<CardBody className="w-auto">
										<CardTitle className="fw-bold" style={{ width: "300px" }}>
											{songs[currentSongIndex].name}
										</CardTitle>
										<CardText style={{ width: "auto" }}>
											{songs[currentSongIndex].singer}
										</CardText>
									</CardBody>
								</Card>
							</div>
						</Col>
						<Col xs="4" className="d-flex justify-content-center">
							<Button color="light" onClick={prevSong}>
								<i className="fa fa-step-backward"></i>
							</Button>
							<Button color="light" onClick={handleBtnPlay}>
								<i
									className={classNames({
										"fa fa-play": isplaying,
										"fa fa-pause": !isplaying,
									})}
								></i>
							</Button>
							<Button color="light" onClick={nextSong}>
								<i className="fa fa-step-forward"></i>
							</Button>
						</Col>
						<Col xs="4" className="d-flex justify-content-end">
							<Button color="light">
								<i className="fa fa-list"></i>
							</Button>
							<Button color="light" onClick={handleBtnRepeat}>
								<i
									className={classNames("fa fa-repeat", {
										btnActive: isRepeat,
									})}
								></i>
							</Button>
							<Button color="light" onClick={handleBtnRandom}>
								<i
									className={classNames("fa fa-random", {
										btnActive: isRandom,
									})}
								></i>
							</Button>

							<Box style={{ margin: "33px 10px" }} sx={{ width: 200 }}>
								<Stack spacing={1} direction="row">
									<VolumeDown
										onClick={(e) => {
											setVolume(0);
											audioRef.current.volume = 0.0;
										}}
									/>
									<Slider
										aria-label="Volume"
										value={volume}
										onChange={(e) => {
											setVolume(e.target.value);
											audioRef.current.volume = volume / 100;
										}}
									/>
									<VolumeUp
										onClick={(e) => {
											setVolume(100);
											audioRef.current.volume = 1.0;
										}}
									/>
								</Stack>
							</Box>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}
export default Player;
