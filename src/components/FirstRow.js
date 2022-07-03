import React from "react";
import PlayList from "./PlayList";
import { Col, Container, Row } from "reactstrap";
import logo_ZingMp3 from "../asset/img/logo_Zingmp3.png";

function FirstRow() {
	const billboard =
		"https://p2.music.126.net/rwRsVIJHQ68gglhA6TNEYA==/109951165611413732.jpg?param=512y512";
	const spotify =
		"https://cdnimg.vietnamplus.vn/t620/uploaded/bojoka/2020_07_15/spotify.jpg";
	return (
		<>
			<div className=" mt-3 fs-2 fw-bold" style={{ marginLeft: "15%" }}>
				Playlists thịnh hành!
			</div>
			<Container>
				<Row xs="4">
					<Col>
						<PlayList
							img={logo_ZingMp3}
							title="Top Zing Mp3"
							description="Những bài hát hay đến từ Zing Mp3..."
						/>
					</Col>
					<Col>
						<PlayList
							img={billboard}
							title="Top billboard"
							description="Những bài hát hay đến từ Zing Mp3..."
						/>
					</Col>
					<Col>
						<PlayList
							img={spotify}
							title="Top spotify"
							description="Những bài hát hay đến từ Zing Mp3..."
						/>
					</Col>
					<Col>
						<PlayList
							img={logo_ZingMp3}
							title="Top Zing Mp3"
							description="Những bài hát hay đến từ Zing Mp3..."
						/>
					</Col>
					<Col>
						<PlayList
							img={billboard}
							title="Top billboard"
							description="Những bài hát hay đến từ Zing Mp3..."
						/>
					</Col>
					<Col>
						<PlayList
							img={spotify}
							title="Top spotify"
							description="Những bài hát hay đến từ Zing Mp3..."
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default FirstRow;
