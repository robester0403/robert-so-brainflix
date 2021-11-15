import './VidPlayer.scss';


function VidPlayer(props) {
  console.log(props.selectedVideo.image)
  return (
    <section className="vidPlayer">
        <video poster={props.selectedVideo.image} alt={`${props.selectedVideo.title} Movie Poster`} controls className="vidPlayer__video">
          Your browser does not support the video tag.
        </video>
    </section>
  )
}

export default VidPlayer;