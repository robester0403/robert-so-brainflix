import Next from '../Next/Next';
import './NextList.scss'



function NextList({nextVideos, onVideoSelect}) {

  console.log(onVideoSelect)
  return (
    <section className="next__wrapper">
      <h3 className="next__header"> 
        NEXT VIDEOS
      </h3>
        {
          nextVideos.map((nextvideos) => <Next
            key={nextvideos.id}
            channel={nextvideos.channel}
            image={nextvideos.image}
            title={nextvideos.title}
            // id={nextvideos.id}
            // onVidSelect={onVidSelect}
          />)
        }
    </section>
  )
}

export default NextList;