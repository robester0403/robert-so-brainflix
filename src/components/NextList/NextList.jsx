import Next from '../Next/Next';
import './NextList.scss'

function NextList(props) {
  console.log(props)
  return (
    <>
      <section className="next">
        <h3 className="next__header"> 
          NEXT VIDEOS
        </h3>
          {
            props.nextVids.map(nextvideos => <Next
              channel={nextvideos.channel}
              image={nextvideos.image}
              title={nextvideos.title}
            />
            )
          }
      </section>
    </>
  )
}

export default NextList;