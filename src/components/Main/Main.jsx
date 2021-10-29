import './Main.scss';

// props
// title
// ch
// timestamp
// views
// likes
// description


function Main(props) {
  return (
    <section className="vid-det">
      <h1 className="vid-det__hdr">
        {props.title}
      </h1>
      <article className="vid-det__stats-ctnr">
        <div className="vid-det__ch-date-ctnr">
          <h3 className="vid-det__ch">
            By {props.channel}
          </h3>
          <h4 className="vid-det__date">
            {props.timestamp}
          </h4>
        </div>
        <div className="vid-det__view-like-ctnr">
          <h4 className="vid-det__view">
            {props.views}
          </h4>
          <h4 className="vid-det__like">
            {props.likes}
          </h4>
        </div>
      </article>
      <article className="vid-det__des">
        {props.description}
      </article>
    </section>
  )
}

export default Main;