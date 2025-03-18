import "./Header.css";
import icon from "../../assets/header-icon.svg";
function Header() {
  return (
    <header className="header">
      <img className="header__icon" src={icon} alt="header icon" />
      <p className="header__title">To Do List</p>
    </header>
  );
}

export default Header;
