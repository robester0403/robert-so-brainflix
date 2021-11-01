
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
    const nextVidFilterArr = vidArr.filter((video)=> video.id !==  this.state.selectedVid.id)
    
    return(
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
  )}
}

export default App;