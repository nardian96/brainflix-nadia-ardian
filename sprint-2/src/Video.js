import React, { Component } from 'react';
import Header from './components/Header'
import LogoHeader from './assets/logo/Logo-brainflix.svg'
import MainVideo from './components/MainVideo'
import Body from './components/Body'
import VideoList from './components/VideoList/VideoList'
import './styles/app.css';
import Axios from 'axios';

//FUNCTION TO APPEND API KEY TO URL REQUEST
const appendKey = (url) => {
  let apiURL = `${url}?api_key=${apiKey}`
  return apiURL
}

const apiKey = '96b4adfb-61bb-4bf3-a395-5056c79948fc';
const apiVideos = appendKey('https://project-2-api.herokuapp.com/videos');
// const apiVid = appendKey(`https://project-2-api.herokuapp.com/videos/:{}`)

class App extends Component {

state = {
  mainVideo: {},
  sidebarVideos: []
}

// displaySideBarVid = () => {
//   return(Axios.get(apiVideos)
//   .then((response) => {
//     this.setState({
//       sidebarVideos: response.data
//     })
//   })
// )  
// }

displayVideoByID = (id) => {
  Axios.get(appendKey(`https://project-2-api.herokuapp.com/videos/${id}`))
  .then((response) => {
    let video = response.data
    console.log(video)
    this.setState({
      mainVideo: video
    })
  });
}

componentDidMount() {
  //Axios call to get list of sidebarVideos
  Axios.get(apiVideos)
  .then((response) => {
    let videos = response.data
    console.log(response)
    this.setState({
      sidebarVideos: response.data
    }, 
    () => this.displayVideoByID(this.state.sidebarVideos[0].id)
    )
  }).then(() => 
    this.displayVideoByID(this.state.sidebarVideos[0].id)
  )
  // this.displaySideBarVid().then(() => {
  //   console.log(this.state)
  //   this.displayVideoByID(this.state.sidebarVideos[0].id)
  // })
};



  componentDidUpdate(prevProps, prevState) {

  }
    
  render() {
    console.log('string', this.props)
    let showPage = '';
    const {mainVideo, sidebarVideos} = this.state;

    return (
    <>  
      <Header logo={LogoHeader} />
      <MainVideo video={mainVideo} />
      <section className='content'>
        <Body video={mainVideo} />
        <VideoList videos={sidebarVideos} mainVideoID={mainVideo.id}/>
      </section>

    </>
    )
  }
};

export default App;
