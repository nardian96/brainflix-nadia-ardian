import React from 'react';
import Header from './components/Header'
import LogoHeader from './assets/logo/Logo-brainflix.svg'
import VideoList from './components/VideoList/VideoList'


import './styles/app.css';

function App() {

  const sidebarVideos = [
    {
      id: 'type of <string>', 
      title: 'type of <string>', 
      channel: 'type of <string>', 
      image: 'type of <string>' 
    }, 
    {
      id: 'type of <string>', 
      title: 'type of <string>', 
      channel: 'type of <string>', 
      image: 'type of <string>' 
    }, 
    {
      id: 'type of <string>', 
      title: 'type of <string>', 
      channel: 'type of <string>', 
      image: 'type of <string>' 
    }, 
    {
      id: 'type of <string>', 
      title: 'type of <string>', 
      channel: 'type of <string>', 
      image: 'type of <string>' 
    }, 
    {
      id: 'type of <string>', 
      title: 'type of <string>', 
      channel: 'type of <string>', 
      image: 'type of <string>' 
    }, 
    {
      id: 'type of <string>', 
      title: 'type of <string>', 
      channel: 'type of <string>', 
      image: 'type of <string>' 
    }, 
    {
      id: 'type of <string>', 
      title: 'type of <string>', 
      channel: 'type of <string>', 
      image: 'type of <string>' 
    }, 
    {
      id: 'type of <string>', 
      title: 'type of <string>', 
      channel: 'type of <string>', 
      image: 'type of <string>' 
    }
  ];

  return (
    <Header logo={LogoHeader} />
    <VideoList videos={sidebarVideos}/>
  );
}

export default App;
