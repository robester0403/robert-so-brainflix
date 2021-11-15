import NextVidCard from '../NextVidCard/NextVidCard';
import './NextVidList.scss'

function NextVidList({nextVideos}) {

  return (
    <section className="next__wrapper">
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

export default NextVidList;