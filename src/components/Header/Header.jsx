import './Header.scss';
import { BrowserRouter, Link, Switch } from "react-router-dom";
import logo from '../../assets/images/Logo/BrainFlix-logo.svg';
import mohanavatar from '../../assets/images/Mohan-muruge.jpg';


function Header() {
  return (
    <header className="search">
      <img src={logo} className="search__logo" alt="BrainFlix Logo" />
      <div className="search__container">
        <form className="search__innercontainer">
          <input className="search__input" type="text" name="search" placeholder="Search"/>
          <img className="search__avatar" src={mohanavatar} alt="Avatar" />
          <BrowserRouter>
            <Switch>
              <Link to="/upload" className="search__submit">
                <input className="search__submit" type="submit" name="submit" value="UPLOAD" />
              </Link>
            </Switch>
          </BrowserRouter>
          <img className="search__avatar-tab-desk" src={mohanavatar} alt="Avatar" />
        </form>
      </div>
    </header>
  )
}

export default Header;