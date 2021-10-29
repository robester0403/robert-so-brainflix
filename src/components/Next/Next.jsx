import './Next.scss'



const Next = ({channel, image, title, id, onVidSelect}) => {
  console.log(onVidSelect)
    const handleClick = (event) => {
        event.preventDefault()
        onVidSelect(id)
    }

  return (
    <>
      <article className="next__card" onClick={handleClick}>
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

  </>
  )
}

export default Next