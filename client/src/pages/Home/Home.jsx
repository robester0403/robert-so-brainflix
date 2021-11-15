import axios from 'axios';
import { Component } from 'react';
import VidPlayer from '../../components/VidPlayer/VidPlayer';
import Main from '../../components/Main/Main';
import CommentsList from '../../components/CommentsList/CommentsList';
import NextVidList from '../../components/NextVidList/NextVidList';
import './Home.scss';

class Home extends Component {
  state = {
    videos : [],
    selectedVideo: {},
  };

  getSelectedVideo = (videoId) => {

    axios.get(`http://localhost:8080/api/videos/${videoId}`)
  .then((response) => {
    this.setState({
      selectedVideo: response.data
    })
  })
  .catch((error)=> console.log(error))
}

  componentDidMount() {

    axios.get(`http://localhost:8080/api/videos`)
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
            {this.state.videos && <NextVidList
              nextVideos={filteredList}
            /> }
          </article>
        </section>
      </>
    );
  }
}

export default Home;
