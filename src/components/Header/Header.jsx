import './Header.scss';
import { Link } from "react-router-dom";
import logo from '../../assets/images/Logo/BrainFlix-logo.svg';
import mohanavatar from '../../assets/images/Mohan-muruge.jpg';


function Header() {
  const upload = () => {
    alert("Great Upload!!");
  }
  return (
    <header className="search">
      <Link to="/">
        <img src={logo} className="search__logo" alt="BrainFlix Logo" />
      </Link>
      <div className="search__container">
        <form className="search__innercontainer">
          <input className="search__input" type="text" name="search" placeholder="Search"/>
          <img className="search__avatar" src={mohanavatar} alt="Avatar" />
              <Link to="/upload" className="search__submit">
                <button className="search__submit" onClick={upload} >Upload</button>
              </Link>

          <img className="search__avatar-tab-desk" src={mohanavatar} alt="Avatar" />
        </form>
      </div>
    </header>
  )
}

export default Header;