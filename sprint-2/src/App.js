import React, { Component } from 'react';
import Header from './components/Header'
import LogoHeader from './assets/logo/Logo-brainflix.svg'
import MainVideo from './components/MainVideo'
import Body from './components/Body'
import VideoList from './components/VideoList/VideoList'
import VideoPage from './App'
import UploadPage from './Upload'
import './styles/app.css';


class App extends Component {
  state = {
    mainVideo: {
      id: '001',
      title: 'BMX Rampage: 2018 Highlights',
      description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
      channel: 'Red Cow',
      image: './images/video-list-0.jpg',
      views: '1,001,023',
      likes: '110,985',
      duration: 'type of <string>',
      video: 'type of <string>',
      timestamp: '12/18/2018',
      comments: [
        {
          id: '01',
          name: 'Michael Lyons', 
          date: '12/18/2018', 
          content: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
        },
        {
          id: '02',
          name: 'Gary Wong', 
          date: '12/12/2018', 
          content: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
        },
        {
          id: '03',
          name: 'Theodore Duncan', 
          date: '11/15/2016', 
          content: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
        }
      ]
    },

    sidebarVideos: [
      {
        id: '001', 
        title: 'BMX Rampage: 2018 Highlights', 
        channel: 'Red Cow', 
        image: './images/video-list-0.jpg' 
      }, 
      {
        id: '002', 
        title: 'Become A Travel Pro In One Easy Lesson', 
        channel: 'Todd Welch', 
        image: './images/video-list-1.jpg' 
      }, 
      {
        id: '003', 
        title: 'Les Houches The Hidden Gem Of The Chamonix', 
        channel: 'Cornelia Blair', 
        image: './images/video-list-2.jpg'
      }, 
      {
        id: '004', 
        title: 'Travel Health Useful Medical Information For', 
        channel: 'Glen Harper', 
        image: './images/video-list-3.jpg'
      }, 
      {
        id: '005', 
        title: 'Cheap Airline Tickets Great Ways To Save', 
        channel: 'Emily Harper', 
        image: './images/video-list-4.jpg' 
      }, 
      {
        id: '006', 
        title: 'Take A Romantic Break In A Boutique Hotel', 
        channel: 'Ethan Owen', 
        image: './images/video-list-5.jpg' 
      }, 
      {
        id: '007', 
        title: 'Choose The Perfect Accommodations', 
        channel: 'Lydia Perez', 
        image: './images/video-list-6.jpg' 
      }, 
      {
        id: '008', 
        title: 'Cruising Destination Ideas', 
        channel: 'Timothy Austin', 
        image: './images/video-list-7.jpg' 
      }, 
      {
        id: '009', 
        title: 'Train Travel On Track For Safety', 
        channel: 'Scotty Cranmer', 
        image: './images/video-list-8.jpg' 
      }
    ],

    currentPage: 
      < VideoPage />, <UploadPage />
  };

  navClickHandler = (event, url) => {
    event.preventDefault();

    this.setState (
      {
        currentPage: url
      },
      () => window.history.pushState(null, '', url)
    );
  }
    
  render() {

    let showPage = '';

    if (this.state.currentPage === {VideoPage}) {
      showPage = <App />;
    } else if (this.state.currentPage) ===

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
