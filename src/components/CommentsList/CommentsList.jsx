import Comments from '../Comments/Comments';

const CommentsList = (props) => {
  console.log(props)
  return (
    <>
      {
        props.comments.map(comment => <Comments
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