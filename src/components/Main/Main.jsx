import './Main.scss';

// props
// title
// ch
// timestamp
// views
// likes
// description


function Main() {
  return (
    <section className="vid-det">
      <h1 className="vid-det__hdr">
        BMX Rampage: 2021 Highlights (title)
      </h1>
      <article className="vid-det__stats-ctnr">
        <div className="vid-det__ch-date-ctnr">
          <h3 className="vid-det__ch">
            By Red Crow (author)
          </h3>
          <h4 className="vid-det__date">
            07/11/2021
          </h4>
        </div>
        <div className="vid-det__view-like-ctnr">
          <h4 className="vid-det__view">
            1,001,023 (views)
          </h4>
          <h4 className="vid-det__like">
            110,985 (like)
          </h4>
        </div>
      </article>
      <article className="vid-det__des">
          (description)Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, officiis delectus sunt suscipit in unde, aliquam reiciendis voluptas doloremque culpa qui consequatur quo soluta commodi, modi porro repellendus perferendis amet.
      </article>
    </section>
  )
}

export default Main;