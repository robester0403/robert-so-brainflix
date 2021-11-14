import './Hero.scss';


function Hero(props) {
  return (
    <section className="hero">
        <video poster={props.selectedVideo.image} alt={`${props.selectedVideo.title} Movie Poster`} controls className="hero__video">
          Your browser does not support the video tag.
        </video>
    </section>
  )
}

export default Hero;