import React, { Component } from 'react';
// import Header from './components/Header'
// import LogoHeader from './assets/logo/Logo-brainflix.svg'
import MainVideo from './components/MainVideo/MainVideo'
import VideoDetails from './components/MainVideo/VideoDetails'
import VideoList from './components/SidebarVideos/VideoList'
import Axios from 'axios';
import './styles/app.css';

const apiVideos = 'http://localhost:8080/videos';


class Video extends Component {

  state = {
    mainVideo: {},
    sidebarVideos: []
  }

  displaySideBarVid = () => {
    return(Axios.get(apiVideos)
    .then((response) => {
      this.setState({
        sidebarVideos: response.data
      })
    })
  )}

  displayVideoByID = (id) => {
    if (id === undefined) {
      id = "1af0jruup5gu"
    };
    Axios.get(`http://localhost:8080/videos/${id}`)
    .then((response) => {
      let video = response.data
      this.setState({
        mainVideo: video
      })
    });
  } 


  componentDidMount() {
    this.displaySideBarVid().then(() => {
    if(this.props.match.params.id !== undefined){
      this.displayVideoByID(this.props.match.params.id);
    } else {
      this.displayVideoByID();
    }
  })
  }


  componentDidUpdate(prevProps, prevState) {
    const { params } = this.props.match
    if (prevProps.match.params.id !== params.id) {
      this.displayVideoByID(params.id)
    }
  }

    
  render() {
    const { mainVideo , sidebarVideos } = this.state;


    return (
    <>  
      <MainVideo video={this.state.mainVideo} />
      <section className='content'>
        <VideoDetails video={this.state.mainVideo} displayVideo={this.displayVideoByID}/>
        <VideoList videos={sidebarVideos} mainVideoID={mainVideo.id}/>
      </section>

    </>
    )
  }
};
export default Video;
