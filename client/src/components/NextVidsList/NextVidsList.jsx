import NextVidCard from '../NextVidCard/NextVidCard';
import './NextVidsList.scss'

function NextVidsList({nextVideos}) {
  return (
    <section className="next">
      <h3 className="next__header"> 
        NEXT VIDEOS
      </h3>

        {
          nextVideos.map((nextvideos) => 
          <NextVidCard
            key={nextvideos.id}
            channel={nextvideos.channel}
            image={nextvideos.image}
            title={nextvideos.title}
            id={nextvideos.id}
          />)
        }
    </section>
  )
}

export default NextVidsList;