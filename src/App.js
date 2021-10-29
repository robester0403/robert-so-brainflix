import './App.scss';
import { Component } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import Comments from './components/Comments/Comments';
import Next from './components/Next/Next';
import vidDetArr from './data/videodetails.json';
import vidArr from './data/videos.json'
import logo from './assets/images/Logo/BrainFlix-logo.svg'
import react from 'react';


  // document.title = "Robert So Brainflix";

class App extends Component {
  state = {
    videoDetails: vidDetArr,
    nextVidDet: vidArr
  }

  render () {

    return(
    <>
    <div className="App">
      <Header />
      <Hero />
      <Main
// title
// channel
// timestamp
// views
// likes
        title={this.state.videoDetails[0].title}
        channel={this.state.videoDetails[0].channel}
        timestamp={this.state.videoDetails[0].timestamp}
        views={this.state.videoDetails[0].views}
        likes={this.state.videoDetails[0].likes}
        description={this.state.videoDetails[0].description}
      />
      <Comments />
      <Next /> 
    </div>
    </>
  )}
}

export default App;



// {
//   "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
//   "title": "BMX Rampage: 2021 Highlights",
//   "channel": "Red Cow",
//   "image": "https://i.imgur.com/l2Xfgpl.jpg",
//   "description": "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
//   "views": "1,001,023",
//   "likes": "110,985",
//   "duration": "4:01",
//   "video": "https://project-2-api.herokuapp.com/stream",
//   "timestamp": 1626032763000,
//   "comments": [

// {"id":"84e96018-4022-434e-80bf-000ce4cd12b8",
// "title":"BMX Rampage: 2021 Highlights",
// "channel":"Red Cow",
// "image":"https://i.imgur.com/l2Xfgpl.jpg"},