import './Upload.scss';
import uploadimg from '../../assets/images/upload.jpg';


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
          <div className="upload__container">
            <div className="upload__img-ctnr">
              <h3 className="upload__img-title">
                VIDEO THUMBNAIL
              </h3>
              <div className="upload__img-inner-ctnr">
                <img src={uploadimg} className="upload__img"/>
              </div>
            </div>
            <form className="upload__form-inputs-wrapper">
              <div className="upload__form-ctnr">
                <label className="upload__form-title-label">
                  TITLE YOUR VIDEO
                </label>
                  <input type="text" className="upload__form-title-input"  placeholder="Add a title to your video"/>
              </div>
              <div className="upload__form-ctnr">
                <label className="upload__form-des-label">
                  ADD A VIDEO DESCRIPTION
                </label>
                  <textarea className="upload__form-des-input" placeholder="Add a description to your video">
                  </textarea>
              </div>
            </form>
          </div>
              <div className="upload__form-buttons-ctnr">
                  <button className="upload__form-publish" onClick={upload}>
                    PUBLISH
                  </button>
                  <button className="upload__form-cancel">
                    CANCEL
                  </button>
                </div>
      </article>
    </section>
  </>
)
}

export default Upload;