import './Comments.scss'

function Comments(props) {
  console.log(props)
  return (
    <section className="comment__wrap">
      <article className="comments__card">
        <div className="comments">
          <div className="comments__left">
            <aside className="comments__avatar">
            </aside>
          </div>
            <div className="comments__right">
              <h4 className="comments__name">
                {props.name}
              </h4>
              <h4 className="comments__date">
                {props.timestamp}
              </h4>
              <h4 className="comments__comment">
                {props.comment}
              </h4>
            </div>
        </div>
      </article>
    </section>
  )
}

export default Comments;