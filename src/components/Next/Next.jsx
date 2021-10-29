import './Next.scss'

function Next(props) {
  return (
    <>

      <article className="next__card">
        <div className="next__card-img-ctnr">
          <img className="next__card-img" src={props.image} alt={`${props.title} Mini Poster`}></img>
        </div>
        <div className="next__txt_ctnr">
          <div className="next__title">
            {props.title}
          </div>
          <div className="next__channel">
            {props.channel}
          </div>
        </div>
      </article>

  </>
  )
}

export default Next;