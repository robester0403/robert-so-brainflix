import './Upload.scss';


function Upload() {
  console.log()
  const upload = () => {
    alert("Great Upload!!");
  }
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
            <button className="" onClick={upload}>
              PUBLISH
            </button>
          </form>
      </article>
    </section>
  </>
)
}

export default Upload;