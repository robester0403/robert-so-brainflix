import './Comments.scss'
import { handleTime } from  "../../utils/Dateutils.js"

function Comments(props) {
  return (
    <section className="comments__wrap">
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
                {handleTime(props.timestamp)}
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