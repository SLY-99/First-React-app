import "../footer/footer.css";
import LogoFooter from "../../Assets/images/logo-footer.png";
import Facebook from "../../Assets/images/icons/facebook.svg";
import Instagram from "../../Assets/images/icons/instagram.svg";
import Twitter from "../../Assets/images/icons/twitter.svg";
import Youtube from "../../Assets/images/icons/youtube.svg";
import Linkidn from "../../Assets/images/icons/linkdin.svg";

function Footer() {
    return (
        <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__left-box">
                    <img class="footer__logo" src={LogoFooter} alt="logo"/>
                    <p class="footer__text">Contrary to popular  is not simply random text. It has </p>
                    <picture>
                        <img class="footer__icons" src={Facebook} alt="facebook"/>
                        <img class="footer__icons" src={Instagram} alt="instagram"/>
                        <img class="footer__icons" src={Twitter} alt="twitter"/>
                        <img class="footer__icons" src={Youtube} alt="youtube"/>
                        <img class="footer__icons" src={Linkidn} alt="linkdin"/>
                    </picture>
                </div>
                <div class="footer__right-box">
                    <ul class="footer__list">
                        <li><h3 class="footer__subtitle">About</h3></li>
                        <li class="footer__item"><a class="footer__link" href="#">Company</a></li>
                        <li class="footer__item"><a class="footer__link" href="#">Team</a></li>
                        <li class="footer__item"><a class="footer__link" href="#">Career</a></li>
                        <li class="footer__item"><a class="footer__link" href="#">Blogs</a></li>
                    </ul>
                    <ul class="footer__list">
                        <li><h3 class="footer__subtitle">Products</h3></li>
                        <li class="footer__item"><a class="footer__link" href="#">E-Books</a></li>
                        <li class="footer__item"><a class="footer__link" href="#">Preasantation</a></li>
                        <li class="footer__item"><a class="footer__link" href="#">Management</a></li>
                        <li class="footer__item"><a class="footer__link" href="#">Dashboard</a></li>
                    </ul>
                    <ul class="footer__list">
                        <li><h3 class="footer__subtitle">Address</h3></li>
                        <li class="footer__item"><a class="footer__link" href="#">Country Delevery</a></li>
                        <li class="footer__item"><a class="footer__link" href="#">Counter Beach Post</a></li>
                        <li class="footer__item"><a class="footer__link" href="www.itobd.com">www.itobd.com</a></li>
                        <li class="footer__item"><a class="footer__link" href="tel:+880176565655">+880176565655</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;