import "../header/header.css"
import logo from "../../Assets/images/logo-header.png"


function Header() {
    return(
        <header className="header">
        <div className="container">
            <div className="header__wrapper">
                <img className="header__logo" src={logo} alt="logo"/>
                <ul className="header__list">
                    <li className="header__item">Home</li>
                    <li className="header__item">Properties</li>
                    <li className="header__item">About us</li>
                    <li className="header__item">Blog</li>
                    <a className="header__btn" href="#">Contact us</a>
                </ul>
            </div>
        </div>
    </header>
    )
}

export default Header;