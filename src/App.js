
import { Component } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import CommentsList from './components/CommentsList/CommentsList';
import NextList from './components/NextList/NextList';
import './App.scss'
import vidDetArr from './data/videodetails.json';
import vidArr from './data/videos.json'




class App extends Component {
  state = {
    selectedVid: vidDetArr[0],
    nextVidDet: vidArr
  }

  handleVidSelect = (id) => {
    this.setState({
      selectedVid: vidDetArr.find((vid) => vid.id === id)
    })
  };


  render () {
    document.title = "Robert So Brainflix";
    // filter out the video selected
    // const vidDetFilterArr = vidDetArr.filter((video)=> video.id !==  this.state.selectedVid.id)
    const nextVidFilterArr = vidArr.filter((video)=> video.id !==  this.state.selectedVid.id)
    
    
    return(
    <>
    <div className="App">
      <Header />
      <Hero
        selectedVid={this.state.selectedVid}
      />
      <section className="main-content">
        <article>
          <Main
            selectedVid={this.state.selectedVid}
          />
          <CommentsList
          // note this one is a bit different because we are accessing a deeper level
            comments={this.state.selectedVid.comments}
          />
        </article>
        <article className="main-content__next-vid-box">
          <NextList
          // we will process this array later with filter
            onVidSelect={this.handleVidSelect}
            nextVids={nextVidFilterArr}
          /> 
        </article>
      </section>
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