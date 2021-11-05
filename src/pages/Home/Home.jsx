import axios from 'axios';
import { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Main from '../../components/Main/Main';
import CommentsList from '../../components/CommentsList/CommentsList';
// import NextList from '../../components/NextList/NextList';
import './Home.scss';

const API_URL = "https://project-2-api.herokuapp.com" 
const API_KEY_STRING = "?api_key=<78719564-cc2a-4348-85e3-b4d530c557d7>"

// Use get data to populate the state video
// then default fill in selectedVid{}

class Home extends Component {
  state = {
    videos : [],
    selectedVideo: {},
  };

  // this function will hold the get request to get a specific plant using the specific plant endpoint. we can call it at any time and must pass in the plantID
  getSelectedVideo = (videoId) => {
    axios.get(`${API_URL}/videos/${videoId}${API_KEY_STRING}`)
    .then((response) => {
        this.setState({
            selectedVideo: response.data
        })
        console.log(this.state.selectedVideo.comments)
    })
    .catch((error)=> console.log(error))
}

// This runs perfectly so far with the home route. So loads whenever component home is called
    componentDidMount() {
        console.log("hello, this component has mounted")

        // getting the videos. this get line is actually pretty static
        axios.get(`${API_URL}/videos${API_KEY_STRING}`)
        .then((response)=> {
            console.log(response.data)
            this.setState({
                videos: response.data
            })
            console.log(response.data[0].id)
            //This is my pain point this.props.match.params.videoId
            const videoId = this.props.match.params.videoId || response.data[0].id
            console.log(videoId)
            this.getSelectedVideo(videoId)
        })
        .catch((error)=> console.log(error) )
    }

    //once state is changed the first time, it will call on componentDidUpdate 
    //anytime state or props is changed again, componentDidUpdate will be called again 
    //so when we click on a new link the props.match.params.id is update and thus componentDidUpdate will be read once more

    //This is my next pain point
    //componentDidUpdate has access to the previous props, which means it can compare the plantId from the URL before the user clicked on the link and after the user clicked on the link 
    componentDidUpdate(previousProps) {
        const previousVideoId = previousProps.match.params.videoId
        const currentVideoId = this.props.match.params.videoId

        console.log(previousVideoId === currentVideoId)

        //we only want to make the axios call IF the previous plantID from the previous click is different than the new plantID from the new click 
        if(previousVideoId !== currentVideoId) {
            //we will call our getSelectedPlant if it is true 
            this.getSelectedVideo(currentVideoId)
        
        }
    }

  render() {
    // if (this.state.selectedVideo.comments === null) {
    //   return false
    // };

    return (
      <>
        <Hero
        selectedVideo={this.state.selectedVideo}
        />
        <section className="main-content">
          <article>
            <Main
              selectedVideo={this.state.selectedVideo}
            />
            {this.state.selectedVideo.comments && <CommentsList
            // note this one is a bit different because we are accessing a deeper level
                comments={this.state.selectedVideo.comments}
            />}
          </article>
          <article className="main-content__next-vid-box">
            {/* <NextList
            // we will process this array later with filter
              onVideoSelect={this.handleVideoSelect}
              nextVideos={nextVidFilterArr}
            />  */}
          </article>
        </section>
      </>
    );
  }
}

export default Home;
