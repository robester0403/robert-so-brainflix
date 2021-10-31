import './Main.scss';
import views from "../../assets/images/Icons/views.svg"
import likes from "../../assets/images/Icons/likes.svg"
import { handleTime } from  "../../utils/Dateutils.js"
// props
// title
// ch
// timestamp
// views
// likes
// description


function Main(props) {
  console.log (props)
  return (
    <section className="vid-det">
      <h1 className="vid-det__hdr">
        {props.selectedVid.title}
      </h1>
      <article className="vid-det__stats-ctnr">
        <div className="vid-det__ch-date-ctnr">
          <h3 className="vid-det__ch">
            By {props.selectedVid.channel}
          </h3>
          <h4 className="vid-det__date">
            {handleTime(props.selectedVid.timestamp)}
          </h4>
        </div>
        <div className="vid-det__view-like-ctnr">
          <h4 className="vid-det__view">
            <img className="vid-det__view-icon" src={views} alt="views icon"/>
            {props.selectedVid.views}
          </h4>
          <h4 className="vid-det__like">
            <img className="vid-det__view-icon" src={likes} alt="likes icon"/>
            {props.selectedVid.likes}
          </h4>
        </div>
      </article>
      <article className="vid-det__des">
        {props.selectedVid.description}
      </article>
    </section>
  )
}

export default Main;