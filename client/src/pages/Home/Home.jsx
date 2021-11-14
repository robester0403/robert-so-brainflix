import axios from 'axios';
import { Component } from 'react';
import VidPlayer from '../../components/VidPlayer/VidPlayer';
import Main from '../../components/Main/Main';
import CommentsList from '../../components/CommentsList/CommentsList';
import NextVidsList from '../../components/NextVidsList/NextVidsList';
import './Home.scss';

const API_URL = "https://project-2-api.herokuapp.com" 
const API_KEY_STRING = "?api_key=<78719564-cc2a-4348-85e3-b4d530c557d7>"

class Home extends Component {
  state = {
    videos : [],
    selectedVideo: {},
  };

  getSelectedVideo = (videoId) => {
    axios.get(`${API_URL}/videos/${videoId}${API_KEY_STRING}`)
  .then((response) => {
    this.setState({
      selectedVideo: response.data
    })
  })
  .catch((error)=> console.log(error))
}

  componentDidMount() {
    console.log("hello, this component has mounted")

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

  componentDidUpdate(previousProps) {
    const previousVideoId = previousProps.match.params.videoId
    const currentVideoId = this.props.match.params.videoId
    console.log(previousVideoId === currentVideoId)
    if(previousVideoId !== currentVideoId) {
        this.getSelectedVideo(currentVideoId) 
    }
  }

  render() {
    const filteredList = this.state.videos.filter(response => response.id !== this.state.selectedVideo.id);
    return (
      <>
        <VidPlayer
        selectedVideo={this.state.selectedVideo}
        />
        <section className="main-content">
          <article>
            <Main selectedVideo={this.state.selectedVideo}/>
            {this.state.selectedVideo.comments && <CommentsList
                comments={this.state.selectedVideo.comments}
            />}
          </article>
          <article className="main-content__next-vid-box">
            {this.state.videos && <NextVidsList
              nextVideos={filteredList}
            /> }
          </article>
        </section>
      </>
    );
  }
}

export default Home;
