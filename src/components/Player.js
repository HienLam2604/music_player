import React, { useState, useEffect } from 'react';
import {Row,Button,Progress,Card,CardBody,CardTitle,CardText, CardImg, Container, Col} from 'reactstrap';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import classNames from 'classnames';
import { Howl } from 'howler';
import songs from './Data'
function Player() {
  const [isplaying, setIsplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [songProgress, setSongProgress] = useState(0);
  useEffect(() => {
    document.title = songs[currentSong].name
  }, []);
  const playSound = ()=>{
    const sound = new Howl({
      src: ['a.mp3'],
      
      onend: function() {
        console.log('Finished!');
      }
    });
    sound.play();
    console.log(songs[currentSong])
  }

  const loadCurrentSong = ()=>{
      return songs[currentSong].src
  }
  const handleBtnPlay = () => {
    if(isplaying){
      playSound();
    }
    setIsplaying(!isplaying); 
  };

  const nextSong = ()=>{
    setCurrentSong((currentSong + 1) % songs.length);
    document.title = songs[currentSong+1].name
    console.log(songs[currentSong].name, currentSong)
  }
  const prevSong = ()=>{
    setCurrentSong((currentSong - 1) % songs.length);
    document.title = songs[currentSong-1].name;
    console.log(currentSong)
  }
 
  return <div className='h-auto fixed-bottom'>
    <audio src='a.mp3' />
	  
    <Progress style={{height:'3px'}} value='10' max='100' min='0'></Progress>
    <Container fluid className='bg-light text-black'>
    <Row className='player p-2 '>
    <Col xs='4'>
        <div className=''>
            <Card className="d-flex flex-row" style={{maxWidth: '80px', border:'none'}}>
                <CardImg id="thumnail" className='rounded-start' src={songs[currentSong].image} height={70} />
                <CardBody className='w-auto'>
                  <CardTitle className='fw-bold' style={{ width:'300px' }}>{songs[currentSong].name}</CardTitle>
                  <CardText style={{ width:'auto' }}>{songs[currentSong].singer}</CardText>
                </CardBody>
            </Card>
        </div>
      </Col>
    <Col xs='4' className='d-flex justify-content-center'>
      <Button color='light' onClick={prevSong}><i className="fa fa-step-backward"></i></Button>
      <Button color='light' onClick={handleBtnPlay}><i className={classNames({"fa fa-pause":!isplaying,"fa fa-play":isplaying})}></i></Button>
      <Button color='light' onClick={nextSong} ><i className="fa fa-step-forward"></i></Button>
    </Col>
    <Col xs='4' className='d-flex justify-content-end'>
      <Button color='light'><i className="fa fa-list"></i></Button>
      <Button color='light'><i className="fa fa-repeat"></i></Button>
      <Button color='light'><i className="fa fa-random active"></i></Button>
      
      <Box style={{ margin:'33px 10px' }} sx={{ width: 200 }}>
      <Stack spacing={1} direction="row">
        <VolumeDown />
        <Slider aria-label="Volume" value={50}/>
        <VolumeUp />
      </Stack>
      </Box>
    </Col>
    </Row>
    </Container>
  </div>;
}

export default Player;
