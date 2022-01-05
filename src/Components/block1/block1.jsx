import "../block1/block1.css";
import HeroImg from "../../Assets/images/intro-img.png"

function Hero() {
    return (
        <section class="intro">
        <div class="container">
            <div class="intro__wrapper">
                <div class="intro__box">
                    <h1 class="intro__title">Find the perfect place to stay with your family</h1>
                    <p class="intro__text">Buying a home is a life-changing experience, so shouldn’t your real estate agent be a life changer.</p>
                    <ul class="intro__list">
                        <li class="intro__item">Buy</li>
                        <li class="intro__item">Rent</li>
                        <li class="intro__item">Sell</li>

                        <ul class="intro__list2">
                            <li class="intro__item2">
                               <p class="intro__text2">Location</p>
                               <h3 class="intro__sub-title">Dhaka</h3>
                            </li>
                            <hr class="intro__line"/>
                            <li class="intro__item2">
                                <p class="intro__text2">Property type</p>
                               <h3 class="intro__sub-title">Duplex</h3>
                            </li>
                            <hr class="intro__line"/>
                            <li class="intro__item2">
                                <p class="intro__text2">Price</p>
                               <h3 class="intro__sub-title">$4000-$8000</h3>
                            </li>
                            <a class="intro__btn" href="#">Search</a>
                        </ul>
                    </ul>

                </div>
                <img class="intro__img" src={HeroImg} alt="building"/>
            </div>
        </div>
    </section>
    )
}

export default Hero;