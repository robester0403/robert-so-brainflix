import './Hero.scss';


function Hero(props) {
  console.log(props.selectedVid.image)
  return (
    <section className="hero">
        <video poster={props.selectedVid.image} alt={`${props.selectedVid.title} Movie Poster`} controls className="hero__video">
          Your browser does not support the video tag.
        </video>
    </section>
  )
}

export default Hero;