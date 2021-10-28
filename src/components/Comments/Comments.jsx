import './Comments.scss'

function Comments() {
  return (
    <>
    <section className="comment__wrap">

      <h3 className="comment__title">
        3 comments
      </h3>
      <article className="comment__container">
        <img src="" className="comment__avatar"/>
        <form className="comment__form">

          <label className="comment__form-label" >
            COMMENT
          </label>
          <textarea className="comment__form-comment" >
            Add a new comment
          </textarea>
          <button className="comment__form-submit">
          comment__form-submit
          </button>
        </form>
      </article>

    <article className="comments__container">
      <div className="comments">
        <div className="comments__left">
          <aside className="comments__avatar">
          </aside>
        </div>
          <div className="comments__right">
            <h4 className="comments__name">
              Enter your name
            </h4>
            <h4 className="comments__date">
              10/28/2021
            </h4>
            <h4 className="comments__comment">
              Add a new comment
            </h4>
          </div>
      </div>
    </article>

    </section>
  </>
  )
}

export default Comments;