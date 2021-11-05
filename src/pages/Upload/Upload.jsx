import './Upload.scss';


const Upload = () => {
  console.log()

return (
  <>
    <section className="upload">
      <article className="upload__wrap">
        
        <h1 className="upload__title">
          Upload Video
        </h1>
        <h3 class>
          VIDEO THUMBNAIL
        </h3>
        <div>
          <img src=""/>
        </div>
        <form className="">
            <label className="">
              TITLE YOUR VIDEO
            </label>
              <input type="text" />
            <label className="">
              ADD A VIDEO DESCRIPTION
            </label>
              <textarea className="">
              </textarea>
            <button className="">
              PUBLISH
            </button>
          </form>
      </article>
    </section>
  </>
)
}

export default Upload;