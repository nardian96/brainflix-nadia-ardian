import React, { Component } from 'react';
// import Header from './components/Header'
// import LogoHeader from './assets/logo/Logo-brainflix.svg'
import MainVideo from './components/MainVideo/MainVideo'
import VideoDetails from './components/MainVideo/VideoDetails'
import VideoList from './components/SidebarVideos/VideoList'
import Axios from 'axios';
import './styles/app.css';

//FUNCTION TO APPEND API KEY TO URL REQUEST
const appendKey = (url) => {
  let apiURL = `${url}?api_key=${apiKey}`
  return apiURL
}

// const apiKey = '96b4adfb-61bb-4bf3-a395-5056c79948fc';
const apiKey = '3d34d4d2-1d32-478d-b8c0-a08fc378cc67'
const apiVideos = appendKey('https://project-2-api.herokuapp.com/videos');


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
  Axios.get(appendKey(`https://project-2-api.herokuapp.com/videos/${id}`))
  .then((response) => {
    let video = response.data
    this.setState({
      mainVideo: video
    })
  });
} 

// postNewComments = (event, messageValue) => {
//   event.preventDefault()
//   const id = this.state.mainVideo.id
//   if (id !== undefined) {
//     // const messageValue = this.state.mainVideo.comment.value;
//     if (messageValue !== "") {
//       const apiComments = appendKey(`https://project-2-api.herokuapp.com/videos/${id}/comments`)
//       Axios.post(apiComments, {
//         name: 'Mohan Murunge',
//         comment: messageValue
//       })
//       .then((response) => {
//         // event.reset();
//         this.displayVideoByID(id)
//         console.log(event)
//       })
//     }
//   };
// }


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
      {/* <Header logo={LogoHeader} /> */}
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
