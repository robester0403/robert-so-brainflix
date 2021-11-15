import './NextVidCard.scss'
import { Link } from "react-router-dom";

function NextVidCard ({ channel, image, title, id}) {
  return (
    <>
      <Link to={`/videos/${id}`}>
        <article className="next__card" 
        >
          <div className="next__card-img-ctnr">
            <img className="next__card-img" src={image} alt={`${title} Mini Poster`}></img>
          </div>
          <div className="next__txt_ctnr">
            <div className="next__title">
              {title}
            </div>
            <div className="next__channel">
              {channel}
            </div>
          </div>
        </article>
      </Link>
  </>
  )
}

export default NextVidCard;