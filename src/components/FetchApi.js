import React from 'react';
import { useState, useEffect } from 'react';
export default function FetchApi() {
	const [songs, setSongs] = useState([]);
	const fetchSongs = async () => {
		const res = await fetch('https://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1')
		const data = await res.json()	
		setSongs(data.data)
	}
	useEffect(() => {
	  fetchSongs()
	}
	, []);
	console.log(songs.song)
	return (
		<div>
		</div>
	);
}
