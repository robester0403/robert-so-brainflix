import axios from 'axios';
import { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Main from '../../components/Main/Main';
import CommentsList from '../../components/CommentsList/CommentsList';
import NextList from '../../components/NextList/NextList';
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
    const filteredList = this.state.videos.filter(response => response.id !== videoId);
    this.setState({
      videos : filteredList
    })
  })
  .catch((error)=> console.log(error))
}

// This runs perfectly so far with the home route. So loads whenever component home is called
  componentDidMount() {
    console.log("hello, this component has mounted")

    // getting the videos. this get line is actually pretty static
    axios.get(`${API_URL}/videos${API_KEY_STRING}`)
    .then((response)=> {
      const videoId = this.props.match.params.videoId || response.data[0].id;
        this.setState({
            videos: response.data
        })
        this.getSelectedVideo(videoId)
    })
    .catch((error)=> console.log(error) )
  }

    //once state is changed the first time, it will call on componentDidUpdate 
    //anytime state or props is changed again, componentDidUpdate will be called again 
    //so when we click on a new link the props.match.params.id is update and thus componentDidUpdate will be read once more

    //componentDidUpdate has access to the previous props, which means it can compare the plantId from the URL before the user clicked on the link and after the user clicked on the link 
    componentDidUpdate(previousProps) {
        const previousVideoId = previousProps.match.params.videoId
        const currentVideoId = this.props.match.params.videoId

        console.log(previousVideoId === currentVideoId)

        if(previousVideoId !== currentVideoId) {
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
            {/* because if the state object is empty, it will evaluate to null which is falsey. 
            && will make it so that the javascript only runs CommentList if the state object is NOT falsey */}
            {this.state.selectedVideo.comments && <CommentsList
            // note this one is a bit different because we are accessing a deeper level
                comments={this.state.selectedVideo.comments}
            />}
          </article>
          <article className="main-content__next-vid-box">
            <NextList
            // First we will try to load it with the entire array
              onVideoSelect={this.state.selectedVideo}
              nextVideos={this.state.videos}
            /> 
          </article>
        </section>
      </>
    );
  }
}

export default Home;
