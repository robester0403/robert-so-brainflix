import './Header.scss';
import logo from '../../assets/images/Logo/BrainFlix-logo.svg';
import mohanavatar from '../../assets/images/Mohan-muruge.jpg';

function Header() {
  return (
    <header className="search">
      <img src={logo} className="search__logo" alt="BrainFlix Logo" />
      <div className="search__container">
        <form >
          <div>
            <input className="search__input" type="text" name="search" />
            <img className="search__avatar" src={mohanavatar} alt="Avatar" />
          </div>
          <input className="search__submit" type="submit" name="submit" value="UPLOAD" />
        </form>
      </div>
    </header>
  )
}

export default Header;