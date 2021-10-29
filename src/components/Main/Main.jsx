import './Main.scss';

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
            {props.selectedVid.timestamp}
          </h4>
        </div>
        <div className="vid-det__view-like-ctnr">
          <h4 className="vid-det__view">
            {props.selectedVid.views}
          </h4>
          <h4 className="vid-det__like">
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