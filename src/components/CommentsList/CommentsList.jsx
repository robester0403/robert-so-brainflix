import Comments from '../Comments/Comments';
import './CommentsList.scss';
import mohanavatar from '../../assets/images/Mohan-muruge.jpg';

const CommentsList = (props) => {
  console.log(props)
  return (
    <>
    <section className="comment__wrap">
      <h3 className="comment__title">
        3 Comments
      </h3>
      <article className="comment__container">
        <img src={mohanavatar} className="comment__avatar" alt="avatar"/>
        <form className="comment__form">
          <label className="comment__form-label">
            JOIN THE CONVERSATION
          </label>
          <textarea className="comment__form-comment">
          </textarea>
          <button className="comment__form-submit">
            COMMENT
          </button>
        </form>
      </article>
    </section>
      {
        props.comments.map(comment => 
          <Comments
            key={comment.id}
            name={comment.name}
            timestamp={comment.timestamp}
            comment={comment.comment}
          />
        )
      }
    </>
  )
}

export default CommentsList;