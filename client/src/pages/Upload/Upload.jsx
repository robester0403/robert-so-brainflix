import './Upload.scss';
import { Link } from "react-router-dom";
import axios from "axios";
import uploadimg from '../../assets/images/upload.jpg';

const Upload = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/api/videos/upload`, {
      title: e.target.title.value,
      description: e.target.description.value
    })
    // .then(alert('You have uploaded'));
    .catch((error)=> console.log(error));
  };

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
                <img src={uploadimg} className="upload__img" alt="Example of an upload"/>
              </div>
            </div>

            <form method="post" action="/upload" className="upload__form-inputs-wrapper" onSubmit={(e) => handleSubmit(e)}>
              <div className="upload__form-ctnr">
                <label className="upload__form-title-label">
                  TITLE YOUR VIDEO
                </label>

                  <input type="text" name='title' className="upload__form-title-input"  placeholder="Add a title to your video"/>
              
              </div>
              <div className="upload__form-ctnr">
                <label className="upload__form-des-label">
                  ADD A VIDEO DESCRIPTION
                </label>

                  <textarea name='description' className="upload__form-des-input" placeholder="Add a description to your video">
                  </textarea>

              </div>
              <button className="upload__form-publish" type='submit' >
                PUBLISH
              </button>
              <Link to="/" >
                <button className="upload__form-cancel">
                  CANCEL
                </button>
              </Link>
            </form>
            
          </div>
            <div className="upload__form-buttons-ctnr">


            </div>
      </article>
    </section>
  </>
)
}

export default Upload;