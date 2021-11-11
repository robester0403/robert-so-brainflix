import './Hero.scss';


function Hero(props) {
  console.log(props.selectedVideo.image)
  return (
    <section className="hero">
        <video poster={props.selectedVideo.image} alt={`${props.selectedVideo.title} Movie Poster`} controls className="hero__video">
          Your browser does not support the video tag.
        </video>
    </section>
  )
}

export default Hero;