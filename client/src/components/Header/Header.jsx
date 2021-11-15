import './Header.scss';
import { Link } from "react-router-dom";
import logo from '../../assets/images/Logo/BrainFlix-logo.svg';
import mohanavatar from '../../assets/images/Mohan-muruge.jpg';

function Header() {
  return (
    <header className="search">
      <Link to="/videos/84e96018-4022-434e-80bf-000ce4cd12b8">
        <img src={logo} className="search__logo" alt="BrainFlix Logo" />
      </Link>
      <div className="search__container">
        <form className="search__innercontainer">
          <input className="search__input" type="text" name="search" placeholder="Search"/>
          <img className="search__avatar" src={mohanavatar} alt="Avatar" />
              <Link to="/upload" >
                <button className="search__submit">Upload</button>
              </Link>

          <img className="search__avatar-tab-desk" src={mohanavatar} alt="Avatar" />
        </form>
      </div>
    </header>
  )
}

export default Header;