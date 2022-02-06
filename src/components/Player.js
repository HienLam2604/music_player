import React, { useState, useEffect } from 'react';
import {Row,Button,Progress,Card,CardBody,CardTitle,CardText, CardImg, Container, Col} from 'reactstrap';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import classNames from 'classnames';
import songs from './Data'
import a from './a.mp3'
import '../App.css'
import { ClassNames } from '@emotion/react';
function Player() {
  const [isplaying, setIsplaying] = useState(true);
  const [isRandom, setIsRandom] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [songProgress, setSongProgress] = useState(10);
  const audio = new Audio(a)
  useEffect(() => {
    document.title = songs[currentSong].name
  }, []);
  const playSong = ()=>{
    audio.play()
  }
  const pauseSong = ()=>{
    audio.pause()
  }
  
  const loadCurrentSong = ()=>{
      return songs[currentSong].src
  }
  const handleBtnRandom = ()=>{
    setIsRandom(!isRandom)
  }
  const handleBtnRepeat = ()=>{
    setIsRepeat(!isRepeat)
  }
  const handleBtnPlay = () => {
    setIsplaying(!isplaying);
    if(isplaying){
      playSong()
      console.log(1)
    }else{
      pauseSong()
      console.log(2)
    }
    console.log(isplaying)
  };

  const nextSong = ()=>{
    setCurrentSong(currentSong + 1);
    if(currentSong >= songs.length-1){
      setCurrentSong(0)
    }
    document.title = songs[currentSong].name
  }
  const prevSong = ()=>{
    setCurrentSong(currentSong - 1);
    if(currentSong <= 0){
      setCurrentSong(songs.length-1)
    }
    document.title = songs[currentSong].name
  }
 
  return <div className='h-auto fixed-bottom'>
    <Progress style={{height:'3px'}} value={songProgress} max='100' min='0'></Progress>
    <Container fluid className='bg-light text-black'>
    <Row className='player p-2 '>
    <Col xs='4'>
        <div className=''>
            <Card className="d-flex flex-row" style={{maxWidth: '80px', border:'none'}}>
                <CardImg id="thumnail" className='rounded-start' src={songs[currentSong].image} height={70} alt='error'/>
                <CardBody className='w-auto'>
                  <CardTitle className='fw-bold' style={{ width:'300px' }}>{songs[currentSong].name}</CardTitle>
                  <CardText style={{ width:'auto' }}>{songs[currentSong].singer}</CardText>
                </CardBody>
            </Card>
        </div>
      </Col>
    <Col xs='4' className='d-flex justify-content-center'>
      <Button color='light' onClick={prevSong}><i className="fa fa-step-backward"></i></Button>
      <Button color='light' onClick={handleBtnPlay}><i className={classNames({"fa fa-play":isplaying,"fa fa-pause":!isplaying})}></i></Button>
      <Button color='light' onClick={nextSong} ><i className="fa fa-step-forward"></i></Button>
    </Col>
    <Col xs='4' className='d-flex justify-content-end'>
      <Button color='light'><i className="fa fa-list"></i></Button>
      <Button color='light'onClick={handleBtnRepeat}><i className={classNames("fa fa-repeat",{"btnActive":isRepeat})}></i></Button>
      <Button color='light'onClick={handleBtnRandom}><i className={classNames("fa fa-random",{"btnActive":isRandom})}></i></Button>
      
      <Box style={{ margin:'33px 10px' }} sx={{ width: 200 }}>
      <Stack spacing={1} direction="row">
        <VolumeDown />
        <Slider aria-label="Volume" value={70}/>
        <VolumeUp />
      </Stack>
      </Box>
    </Col>
    </Row>
    </Container>
  </div>;
}

export default Player;
