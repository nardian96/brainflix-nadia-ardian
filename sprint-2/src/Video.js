import React, { Component } from 'react';
import Header from './components/Header'
import LogoHeader from './assets/logo/Logo-brainflix.svg'
import MainVideo from './components/MainVideo'
import Body from './components/Body'
import VideoList from './components/VideoList/VideoList'
import Axios from 'axios';
import './styles/app.css';

//FUNCTION TO APPEND API KEY TO URL REQUEST
const appendKey = (url) => {
  let apiURL = `${url}?api_key=${apiKey}`
  return apiURL
}

const apiKey = '96b4adfb-61bb-4bf3-a395-5056c79948fc';
const apiVideos = appendKey('https://project-2-api.herokuapp.com/videos');

//CLASS-BASED COMPONENT
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
)  
}

displayVideoByID = (id) => {
  Axios.get(appendKey(`https://project-2-api.herokuapp.com/videos/${id}`))
  .then((response) => {
    let video = response.data
    // console.log(video)
    this.setState({
      mainVideo: video
    })
  });
} 

componentDidMount() {
    console.log('Component First Mount')
    this.displaySideBarVid().then(() => {
      // console.log(this.state)
    this.displayVideoByID(this.state.sidebarVideos[0].id)
  })
}

// componentDidMount() {
//   //Axios call to get list of sidebarVideos
//   Axios.get(apiVideos)
//   .then((response) => {
//     let videos = response.data
//     console.log(response)
//     this.setState({
//       sidebarVideos: response.data
//     }, 
//     () => this.displayVideoByID(this.state.sidebarVideos[0].id)
//     )
//   }).then(() => 
//     this.displayVideoByID(this.state.sidebarVideos[0].id)
//   )
// };

// displayVideoByID = (id) => {
//   Axios.get(appendKey(`https://project-2-api.herokuapp.com/videos/${id}`))
//   .then((response) => {
//     let video = response.data
//     console.log(video)
//     this.setState({
//       mainVideo: video
//     })
//   });
// }



  componentDidUpdate(prevProps, prevState) {
    console.log('this is props on first mount:', prevProps)
    // console.log(prevProps.match.params.id)
    // console.log(this.props.match.params.id)
    //Note: to avoid infinite loop, you want to ONLY update state if certain conditions are true
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.displayVideoByID(this.props.match.params.id)
    }
  }



    
  render() {
    // const {mainVideo } = this.state.mainVideo;
    // const { sidebarVideos } = this.state.sidebarVideos;
    // console.log(this.props)

    return (
    <>  
      <Header logo={LogoHeader} />
      <MainVideo video={this.state.mainVideo} />
      <section className='content'>
        {/* {this.state.mainVideo && <Body video={this.state.mainVideo} />} */}
        <Body video={this.state.mainVideo} />
        <VideoList videos={this.state.sidebarVideos} mainVideoID={this.state.mainVideo.id}/>
      </section>

    </>
    )
  }
};
export default Video;
